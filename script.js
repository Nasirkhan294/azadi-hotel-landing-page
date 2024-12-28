// Data for rooms
const pageData = [
	{
		title: "اتاق استاندارد",
		facilities: [
			"یخچال مینی‌بار",
			"تلویزیون هوشمند",
			"پرده‌های کنترلی",
			"تهویههوااتوماتیک",
			"کمد دیواری",
			"اینترنت بی‌سیم",
			"مبلمان راحتی",
			"صندوق امانات",
		],
		additionalInfo: ["مساحت اتاق : ۲۷ متر", "مناسب برای ۱ تا ۲ نفر", "سرویس روزانه اتاق"],
		images: ["assets/img-slider_1.png", "assets/img_slider_2.png"],
	},
	{
		title: "سوئیت جونیور",
		facilities: [
			"یخچال مینی‌بار",
			"تلویزیون هوشمند",
			"پرده‌های کنترلی",
			"تهویههوااتوماتیک",
			"کمد دیواری",
			"اینترنت بی‌سیم",
			"مبلمان راحتی",
			"صندوق امانات",
		],
		additionalInfo: ["مساحت اتاق : ۲۷ متر", "مناسب برای ۱ تا ۲ نفر", "سرویس روزانه اتاق"],
		images: ["assets/img-slider_1.png", "assets/img_slider_2.png"],
	},
	{
		title: "سوئیت رویال",
		facilities: [
			"یخچال مینی‌بار",
			"تلویزیون هوشمند",
			"پرده‌های کنترلی",
			"تهویههوااتوماتیک",
			"کمد دیواری",
			"اینترنت بی‌سیم",
			"مبلمان راحتی",
			"صندوق امانات",
		],
		additionalInfo: ["مساحت اتاق : ۲۷ متر", "مناسب برای ۱ تا ۲ نفر", "سرویس روزانه اتاق"],
		images: ["assets/img-slider_1.png", "assets/img_slider_2.png"],
	},
	{
		title: "سوئیت دوبلکس",
		facilities: [
			"یخچال مینی‌بار",
			"تلویزیون هوشمند",
			"پرده‌های کنترلی",
			"تهویههوااتوماتیک",
			"کمد دیواری",
			"اینترنت بی‌سیم",
			"مبلمان راحتی",
			"صندوق امانات",
		],
		additionalInfo: ["مساحت اتاق : ۲۷ متر", "مناسب برای ۱ تا ۲ نفر", "سرویس روزانه اتاق"],
		images: ["assets/img-slider_1.png", "assets/img_slider_2.png"],
	},
	{
		title: "سوئیت پرزندیتال",
		facilities: [
			"یخچال مینی‌بار",
			"تلویزیون هوشمند",
			"پرده‌های کنترلی",
			"تهویههوااتوماتیک",
			"کمد دیواری",
			"اینترنت بی‌سیم",
			"مبلمان راحتی",
			"صندوق امانات",
		],
		additionalInfo: ["مساحت اتاق : ۲۷ متر", "مناسب برای ۱ تا ۲ نفر", "سرویس روزانه اتاق"],
		images: ["assets/img-slider_1.png", "assets/img_slider_2.png"],
	},
	
];

// Function to change the displayed content
function changePage(dataIndex) {
	const data = pageData[dataIndex];
	const displayContent = document.getElementById("displayContent");

	if (!data) return;

	// Update content
	displayContent.innerHTML = `
    <div class="card mb-4 rounded-4">
      <div class="card-body p-0 d-flex flex-column flex-lg-row align-items-center">
        <!-- Carousel Section -->
        <div class="col-lg-4">
          <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              ${data.images
			.map(
				(img, idx) => `
                <div class="carousel-item ${idx === 0 ? "active" : ""}">
                  <img src="${img}" class="d-block w-100 border-radius" alt="${data.title}">
                </div>
              `
			)
			.join("")}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <!-- Room Details Section -->
        <div class="col-lg-8 mt-3 mt-lg-0 p-2 p-lg-0 px-lg-4">
          <h3 class="text_color my-2">${data.title}</h3>
          <hr />
          <div class="row">
            <div class="col-md-6 mb-3">
              <h4 class="text-dark mb-2">امکانات اتاق</h4>
              <div class="d-flex flex-wrap">
                ${data.facilities
			.map(
				(facility) => `
                  <div class="col-5 m-1 p-1 py-md-1 input_bg rounded-3 text-center text-lg-start">
                    <p class="mb-0 sm-p md-p">${facility}</p>
                  </div>
                `
			)
			.join("")}
              </div>
            </div>
            <div class="col-md-6">
              <h4 class="text-dark mb-2">اطلاعات تکمیلی</h4>
              <div class="d-flex flex-wrap">
                ${data.additionalInfo
			.map(
				(info) => `
                  <div class="col-5 m-1 py-1 input_bg rounded-3 text-center">
                    <p class="mb-0 sm-p md-p">${info}</p>
                  </div>
                `
			)
			.join("")}
              </div>
              <button type="button" class="btn text-white mt-4 mt-lg-5 w-100" style="background: radial-gradient(103% 103% at 49.62% -3%, #c27b9f 0%, #901d63 100%)">
                مشاهده و رزرو
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Attach events to pagination buttons
document.querySelectorAll(".page-item button").forEach((button, index) => {
	button.addEventListener("click", () => changePage(index));
});
