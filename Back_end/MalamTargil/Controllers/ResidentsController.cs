using Microsoft.AspNetCore.Mvc;
using MalamTargil.BusinessLogic;

namespace MalamTargil.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ResidentsController : ControllerBase
    {
        private readonly IResidentService _residentService;

        // 2.1 Inject your service via constructor
        public ResidentsController(IResidentService residentService)
        {
            _residentService = residentService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Resident>> GetAll()
        {
            var residents = _residentService.GetAllResidents();
            return Ok(residents);
        }

        [HttpGet("{id:int}")]
        public ActionResult<Resident> GetResidentWithItsPayments(int id) {
            var resident = _residentService.GetResidentIncludingPayments(id);
            return Ok(resident);
        }

        // POST /api/residents/{id}/payments:
        [HttpPost("{id}/payments")]
        public ActionResult<IActionResult> AddPayments(int id, [FromBody] List<Payment> newPayments)
        {
            if (newPayments == null || newPayments.Count == 0)
                return BadRequest("No payments items provided.");

            var updatedResident = _residentService.AddPaymentsForResident(id, newPayments);
            if (updatedResident == null)
                return NotFound($"Resident with Id = {id} not found.");

            return Ok(updatedResident);  // returns A with its updated Bs list
        }


    }
}
