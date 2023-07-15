document.getElementById("findButton").addEventListener("click", async () => {
  const ipAddress = await getClientIP();
  const addressInfo = await getAddressInfo(ipAddress);
  displayAddressInfo(addressInfo);
});

async function getClientIP() {
  try {
    const response = await fetch("https://api.ipify.org/?format=json");
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error("Error fetching client IP:", error);
    return null;
  }
}

async function getAddressInfo(ipAddress) {
  try {
    const response = await fetch(`http://ip-api.com/json/${ipAddress}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching address info:", error);
    return null;
  }
}

function displayAddressInfo(addressInfo) {
  const resultDiv = document.getElementById("result");
  if (addressInfo.status === "fail") {
    resultDiv.innerHTML = "<p>Failed to fetch address info.</p>";
  } else {
    resultDiv.innerHTML = `
        <p><strong>Country:</strong> ${addressInfo.country}</p>
        <p><strong>Timezone:</strong> ${addressInfo.timezone}</p>
          <p><strong>Region:</strong> ${addressInfo.regionName}</p>
          <p><strong>City:</strong> ${addressInfo.city}</p>
        `;
  }
}
