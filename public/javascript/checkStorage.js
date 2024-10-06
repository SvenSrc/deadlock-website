// Get current usage in kB:
const used = Math.round((JSON.stringify(localStorage).length/1024)*2);

// Keep pushing 10000 "1" values into LS until it maxes out:
for (let i = 0, data = "1".repeat(10000); ; i++) {
  
  try {
    
    localStorage.setItem("DATA", data);
    
    data += "1".repeat(100000);
  
  } catch(e) {
    
    // Get usage in kB now LS has maxed out (total capacity):
    let total = Math.round((JSON.stringify(localStorage).length/1024)*2);

    console.log("Total: " + total + " kB");
    console.log("Used: " + used + " kB");
    console.log("FREE: " + (total-used) + " kB");
    // Example output:
    // Total: 10176 kB
    // Used: 1953 kB
    // FREE: 8223 kB

    // Remove item used to test LS space:
    localStorage.removeItem('DATA');
    
    break;
    
  }
}