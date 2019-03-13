package com.pavcoding.dev.bankmanager;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

//@Entity
class Beer{

//	@Id
//	@GeneratedValue
	private Long id;
	private String name;

	public Beer() {
	}

	public Beer(String name) {
		this.name = name;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}
//
//@RepositoryRestResource
//interface BeerRepository extends JpaRepository<Beer, Long> {}
//
//@Component
//class BeerCommandLineRunner implements CommandLineRunner {
//	private final BeerRepository repository;
//
//	public BeerCommandLineRunner(BeerRepository repository){
//		this.repository = repository;
//	}
//
//	@Override
//	public void run(String... strings) throws Exception{
//		Stream.of("Kentucky Brunch Brand Stout", "Good Morning", "Very Hazy", "King Julius",
//				"Budweiser", "Coors Light", "PBR").forEach(name
//				-> repository.save(new Beer(name))
//		);
//
//		repository.findAll().forEach(System.out::println);
//	}
//}
//
//@RestController
//class BeerController {
//	private BeerRepository repository;
//
//	public BeerController(BeerRepository repository) {
//		this.repository = repository;
//	}
//
//	@GetMapping("/")
//	Collection<Beer> list(){
//		return repository.findAll();
//	}
//
//	@GetMapping("/good-beers")
//	@CrossOrigin(origins = {"http://localhost:3000",
//							"http://localhost:5000"})
//	Collection<Beer> goodBeers(){
//		return repository.findAll().stream()
//				.filter(this::isGreat)
//				.collect(Collectors.toList());
//	}
//
//	private boolean isGreat(Beer beer){
//		return !beer.getName().equals("Budweiser") &&
//		!beer.getName().equals("Coors Light") &&
//		!beer.getName().equals("PBR");
//	}
//}