const diemdenLst = [
    { name: "Vịnh Bái Tử Long", description: "Nằm trong vịnh Hạ Long thuộc tỉnh Quảng Ninh, là một điểm đến nổi bật với cảnh quan thiên nhiên tuyệt đẹp và bãi tắm sạch sẽ.", image: "diemden1.png" },
    { name: "Đảo Ti Tốp", description: "Nằm ở vùng Đông Bắc Việt Nam, thuộc tỉnh Quảng Ninh, là một điểm đến du lịch hấp dẫn với vẻ đẹp thiên nhiên hoang sơ và lịch sử phong phú.", image: "diemden2.png" },
    { name: "Hang Sửng Sốt", description: "Một trong những hang động đẹp nhất vịnh Hạ Long, nổi bật với các nhũ đá kỳ ảo và lối vào độc đáo.", image: "diemden3.png" },
    { name: "Đảo Tuần Châu", description: "Nơi có cảng tàu du lịch quốc tế, bãi biển nhân tạo đẹp và nhiều khu vui chơi giải trí.", image: "diemden4.png" },
    { name: "Động Thiên Cung", description: "Hang động nổi tiếng với kiến trúc kỳ vĩ của thạch nhũ, ánh sáng chiếu rọi lung linh.", image: "diemden5.png" },
    { name: "Hòn Trống Mái", description: "Biểu tượng của vịnh Hạ Long, nổi bật với hai khối đá chồng lên nhau hình dạng đôi gà trống mái.", image: "diemden6.png" }
  ];
  
  const container = document.getElementById("diemDenList");
  
  diemdenLst.forEach((item, index) => {
    container.innerHTML += `
      <div class="col-span-12 md:col-span-6 bg-white overflow-hidden shadow hover:-translate-y-1 hover:shadow-lg transition pb-[26px]">
        <a href="discoverDetail.html?index=${index}" class="relative block h-full">
          <img src="/assets/image/${item.image}" alt="${item.name}" class="w-full object-cover" />
          <div class="p-4 relative">
            <p class="text-[16px] text-[#000] font-medium mb-1 flex items-center gap-1">
              📍 Hạ Long
            </p>
            <h3 class="text-[18px] font-bold text-[#000] mb-2">${item.name}</h3>
            <p class="text-sm text-[#000] mb-4 leading-[22px]">${item.description.substring(0, 150)}...</p>
          </div>
          <button class="bg-[#FF4D48] text-white text-sm px-4 py-2 rounded absolute bottom-[-16px] left-[16px]">Tìm hiểu thêm</button>
        </a>
      </div>
    `;
  });
  