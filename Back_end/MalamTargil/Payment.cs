namespace MalamTargil
{
    public enum PaymentType { credit, debt }
    public class Payment
    {

        public int Id { get; set; }

        public PaymentType Type { get; set; }

        public decimal Amount { get; set; }

        public DateOnly Date { get; set; }
    }
}
