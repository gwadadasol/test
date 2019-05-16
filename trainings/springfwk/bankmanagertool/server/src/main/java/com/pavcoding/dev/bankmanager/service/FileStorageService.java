package com.pavcoding.dev.bankmanager.service;

import com.pavcoding.dev.bankmanager.exception.FileStorageException;
import com.pavcoding.dev.bankmanager.exception.MyFileNotFoundException;
import com.pavcoding.dev.bankmanager.property.FileStorageProperties;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

@Service
public class FileStorageService {

    private final Path fileStorageLocation;

    @Autowired
    public FileStorageService(FileStorageProperties fileStorageProperties) {
        this.fileStorageLocation = Paths.get(fileStorageProperties.getUploadDir())
                .toAbsolutePath().normalize();

        try{
            Files.createDirectories(this.fileStorageLocation);
        }catch (Exception ex){
            throw new FileStorageException("Could not create the directory where the uploaded files be stored.", ex);
        }
    }

    public String storeFile (MultipartFile file)
    {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());

        try{
            if (fileName.contains("..")){
                throw new FileStorageException("Sorry! Filename contains invalid path sequence " + fileName);
            }

            Path targetLocation = this.fileStorageLocation.resolve(fileName);
            Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);

            return fileName;
        }catch (IOException ex){
            throw new FileStorageException("Could not store file " + fileName + ". Please try again!",ex);
        }
    }

    public Resource loadFileAsResource(String fileName){
        try{
            Path filePath = this.fileStorageLocation.resolve(fileName).normalize();
            Resource resource = new UrlResource(filePath.toUri());
            if (resource.exists()){
                return resource;
            } else  {
                throw new MyFileNotFoundException("File not found " + fileName);
            }
        }catch (MalformedURLException ex){
            throw new MyFileNotFoundException("File not found " + fileName, ex);
        }

    }

    public Path fileLocation(MultipartFile file){
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());

            if (fileName.contains("..")) {
                throw new FileStorageException("Sorry! Filename contains invalid path sequence " + fileName);
            }

            Path targetLocation = this.fileStorageLocation.resolve(fileName);
            return targetLocation;
    }

    public Path fileLocation(String fileName){

        if (fileName.contains("..")) {
            throw new FileStorageException("Sorry! Filename contains invalid path sequence " + fileName);
        }

        Path targetLocation = this.fileStorageLocation.resolve(fileName);
        return targetLocation;

    }
}