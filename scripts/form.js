const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// Populate Product Name select on form.html
const productSelect = document.querySelector("#productName");
if (productSelect) {
  products.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
}

// Footer dates - works on both pages
const yearEl = document.querySelector("#currentyear");
if (yearEl) yearEl.textContent = new Date().getFullYear();
const modEl = document.querySelector("#lastModified");
if (modEl) modEl.textContent = `Last Modification: ${document.lastModified}`;

// Review counter + summary - only on review.html
const countEl = document.querySelector("#reviewCount");
if (countEl) {
  let count = Number(localStorage.getItem("reviewCount")) || 0;
  count++;
  localStorage.setItem("reviewCount", count);
  countEl.textContent = count;

  const params = new URLSearchParams(window.location.search);
  const summary = document.querySelector("#reviewSummary");
  if (summary) {
    const productId = params.get("productName") || "";
    const found = products.find((p) => p.id === productId);
    const productName = found ? found.name : productId;
    const rating = params.get("overallRating") || "Not given";
    const date = params.get("installDate") || "Not given";
    const features = params.getAll("usefulFeatures");
    const review = params.get("writtenReview") || "No written review";
    const user = params.get("userName") || "Anonymous";
    summary.innerHTML = `<p><strong>Product:</strong> ${productName}</p><p><strong>Rating:</strong> ${rating} / 5</p><p><strong>Installed:</strong> ${date}</p><p><strong>Useful Features:</strong> ${features.length ? features.join(", ") : "None selected"}</p><p><strong>Review:</strong> ${review}</p><p><strong>Name:</strong> ${user}</p>`;
  }
}
