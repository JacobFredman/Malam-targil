namespace MalamTargil.BusinessLogic
{
    /// <summary>
    /// Service interface for managing residents and their payments.
    /// </summary>
    public interface IResidentService
    {
        /// <summary>
        /// Retrieves all residents.
        /// </summary>
        IEnumerable<Resident> GetAllResidents();

        /// <summary>
        /// Retrieves a single resident by their identifier.
        /// Returns null if not found.
        /// </summary>
        Resident? GetResidentIncludingPayments(int id);

        /// <summary>
        /// Adds payments to the specified resident.
        /// Throws an exception if the resident does not exist.
        /// </summary>
        List<Payment> AddPaymentsForResident(int residentId, List<Payment> payments);
    }
}
