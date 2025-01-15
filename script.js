document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculateButton");
    const results = document.getElementById("results");
    const errorMessage = document.getElementById("error-message");
  
    calculateButton.addEventListener("click", function () {
      const numLawyers = parseInt(document.getElementById("numLawyers").value);
      const hourlyRate = parseInt(document.getElementById("hourlyRate").value);
      const hoursPerWeek = parseInt(document.getElementById("hoursPerWeek").value);
      const efficiencyGain = parseInt(document.getElementById("efficiencyGain").value);
  
      // Check for missing fields
      if (!numLawyers || !hourlyRate || !hoursPerWeek || !efficiencyGain) {
        errorMessage.textContent = "Please fill in all fields with valid numbers.";
        results.innerHTML = "";
        return;
      }
  
      errorMessage.textContent = "";
  
      // Calculate annual time saved
      const annualTimeSaved = numLawyers * hoursPerWeek * 52 * (efficiencyGain / 100);
  
      // Calculate annual cost savings
      const annualCostSavings = annualTimeSaved * hourlyRate;
  
      // Calculate capacity gain (allow fractions)
      const capacityGain = (annualTimeSaved / (40 * 52)).toFixed(1);
  
      // Display results
      results.innerHTML = `
        <p>📅 <strong>Annual Time Saved:</strong> ${annualTimeSaved.toLocaleString()} hours</p>
        <p>💰 <strong>Annual Cost Savings:</strong> $${annualCostSavings.toLocaleString()}</p>
        <p>📈 <strong>Capacity Gain:</strong> ${capacityGain} FTEs</p>
        <p class="note">*See the Info Box for help interpreting the results.</p>
      `;
    });
  });
  