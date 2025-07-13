namespace MalamTargil
{
    public class Resident
    {
        public required int Id { get; set; }

        public required string Name { get; set; }

        public List<Payment>? Payments { get; set; }
    }
}
