namespace MalamTargil.Data
{
    public static class InMemoryDataContext
    {
        // Our “tables”
        public static List<Resident> Residents { get; set; } = new List<Resident> {
            new() {
                Id = 1,
                Name = "yosi choen",
            Payments = new List<Payment> {
                new() {Id = 2,
                Amount = 100,
                Date = new DateOnly(2024,2,11),
                Type = PaymentType.credit
                }
            }
                },
             new() {
                Id = 2,
                Name = "Moshe Levi",
            Payments = new List<Payment> {
                new() {Id = 2,
                Amount = 100,
                Date = new DateOnly(2024,3,11),
                Type = PaymentType.credit
                }
            }
                }
            };
    }
}
