using MalamTargil.Data;

namespace MalamTargil.BusinessLogic
{
    public class ResidentsService: IResidentService
    {
        public IEnumerable<Resident> GetAllResidents()
        {
            return InMemoryDataContext.Residents;
        }

        public Resident? GetResidentIncludingPayments(int id)
        {
            return InMemoryDataContext.Residents.First(x => x.Id == id);
        }

        public List<Payment> AddPaymentsForResident(int residentId, List<Payment> payments)
        {
            // 1) Look up the resident
            var resident = InMemoryDataContext.Residents
                .FirstOrDefault(x => x.Id == residentId) ?? throw new ArgumentException(
                    $"No resident found with Id = {residentId}", nameof(residentId));

            // 3) If their Payments collection hasn't been initialized, do it now
            resident.Payments ??= [];

            // 4) Add the new payments
            foreach (var payment in payments)
                resident.Payments.Add(payment);

            return payments;
        }
    }
}
