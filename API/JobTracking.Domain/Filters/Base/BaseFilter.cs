using JobTracking.Domain.Constants;

namespace JobTracking.Domain.Filters.Base
{
    public abstract class BaseFilter
    {
        public int PageNumber { get; set; } = 1;
        public int PageSize { get; set; } = 10;
        public string SortBy { get; set; } = "Id";
        public SortOrderEnum SortOrder { get; set; } = SortOrderEnum.Ascending;
        public string? SearchTerm { get; set; }
    }
}