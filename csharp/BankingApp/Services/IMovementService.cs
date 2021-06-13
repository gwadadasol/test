using System;
using System.Collections.Generic;
using BankingApp.Domains;

namespace BankingApp.Services
{
    public interface IMovementService
    {
        public List<Movement> GetMovements();

        public Movement GetMovementById(Guid movementId);

        public bool UpdateMovement(Movement movement);
        public bool DelteMovement(Guid movementId);

    }
}