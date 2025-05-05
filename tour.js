const tourLst = [
    { name: "Tour du thuyền Athena", rate: "5.0 (128 Đánh giá)", image: "tour1.png" },
    { name: "DeLaSea Ha Long Hotel", rate: "5.0 (128 Đánh giá)", image: "tour2.png" },
    { name: "TFLC Halong Bay Golf Club & Luxury Resort", rate: "5.0 (128 Đánh giá)", image: "tour3.png" },
    { name: "Wynd ham Legend Halong Hotel", rate: "5.0 (128 Đánh giá)", image: "tour4.png" },
    { name: "A La Carte Hạ Long", rate: "5.0 (128 Đánh giá)", image: "tour5.png" },
    { name: "Halios Hotel Halong", rate: "5.0 (128 Đánh giá)", image: "tour6.png" },
    { name: "Thai Ha Boutique Hotel", rate: "5.0 (128 Đánh giá)", image: "tour7.png" },
    { name: "Citadines Marina Hạ Long", rate: "5.0 (128 Đánh giá)", image: "tour8.png" },
    { name: "Wyndham Garden Legend Ha Long", rate: "5.0 (128 Đánh giá)", image: "tour9.png" }
  ];
  
  const tourSelect = document.getElementById("tourSelect");
  const tourImage = document.getElementById("tourImage");
  const tourTitle = document.getElementById("tourTitle");
  
  // Render option vào select
  tourLst.forEach((tour, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = tour.name;
    tourSelect.appendChild(option);
  });
  
  // Cập nhật ảnh và tiêu đề khi chọn tour
  tourSelect.addEventListener("change", function () {
    const selectedTour = tourLst[this.value];
    tourImage.src = `/assets/image/${selectedTour.image}`;
    tourTitle.textContent = selectedTour.name;
  });
  