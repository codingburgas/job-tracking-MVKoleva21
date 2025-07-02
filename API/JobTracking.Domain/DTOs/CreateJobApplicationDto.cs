namespace JobTracking.Domain.DTOs
{
    public class CreateJobApplicationDto
    {
        public string CompanyName { get; set; } = string.Empty;
        public string Position { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public DateTime ApplicationDate { get; set; }
        public string Status { get; set; } = "Applied";
        public string? Notes { get; set; }
        public string? ContactEmail { get; set; }
        public string? ContactPhone { get; set; }
        public decimal? SalaryRange { get; set; }
        public string? Location { get; set; }
    }
}