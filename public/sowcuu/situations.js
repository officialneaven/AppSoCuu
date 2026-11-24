// Reference catalogue: QA variants are synthetic and not clinical protocols.
// oxlint-disable-next-line no-unused-vars -- Read by the following classic script in index.html.
const data = {
  "dataset_type": "engineering_backlog_not_medical_protocols",
  "language": "vi-VN",
  "warning_vi": "120 tình huống gốc và 1200 biến thể kiểm thử tổng hợp; không phải 1200 phác đồ y khoa độc lập. Không được dùng để đưa hướng dẫn cấp cứu cho bệnh nhân. Mọi nhánh cần nguồn cụ thể, xác nhận khả dụng và thẩm định chuyên môn trước khi phát hành. Các nguồn chỉ là danh mục tra cứu, không chứng minh từng mục đã được thẩm định.",
  "source_catalog": {
    "IFRC2025": "https://www.ifrc.org/document/ifrc-international-first-aid-resuscitation-and-education-guidelines-2025",
    "AHA2024": "https://cpr.heart.org/en/resuscitation-science/2024-first-aid-guidelines",
    "AHA2025BLS": "https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/adult-basic-life-support/",
    "RC": "https://www.redcross.org/take-a-class/resources/learn-first-aid",
    "SJA": "https://www.sja.org.uk/first-aid-advice/"
  },
  "base_count": 120,
  "test_count": 1200,
  "base_scenarios": [
    {
      "id": "CARD-01",
      "category": "Tim mạch, tuần hoàn",
      "presentation_vi": "Đau tức ngực đột ngột",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA",
        "AHA2025BLS"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "CARD-02",
      "category": "Tim mạch, tuần hoàn",
      "presentation_vi": "Đau ngực lan cánh tay hoặc hàm",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA",
        "AHA2025BLS"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "CARD-03",
      "category": "Tim mạch, tuần hoàn",
      "presentation_vi": "Đau ngực kèm khó thở",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA",
        "AHA2025BLS"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "CARD-04",
      "category": "Tim mạch, tuần hoàn",
      "presentation_vi": "Hồi hộp đánh trống ngực",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA",
        "AHA2025BLS"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "CARD-05",
      "category": "Tim mạch, tuần hoàn",
      "presentation_vi": "Choáng kèm da lạnh ẩm",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA",
        "AHA2025BLS"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "CARD-06",
      "category": "Tim mạch, tuần hoàn",
      "presentation_vi": "Người có bệnh tim đột ngột gục xuống",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA",
        "AHA2025BLS"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "CARD-07",
      "category": "Tim mạch, tuần hoàn",
      "presentation_vi": "Người lớn không đáp ứng và không thở bình thường",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA",
        "AHA2025BLS"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "CARD-08",
      "category": "Tim mạch, tuần hoàn",
      "presentation_vi": "Người lớn không đáp ứng chỉ thở ngáp",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA",
        "AHA2025BLS"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "RESP-01",
      "category": "Hô hấp, ngạt thở",
      "presentation_vi": "Khó thở đột ngột",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA",
        "AHA2025BLS"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "RESP-02",
      "category": "Hô hấp, ngạt thở",
      "presentation_vi": "Thở khò khè",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA",
        "AHA2025BLS"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "RESP-03",
      "category": "Hô hấp, ngạt thở",
      "presentation_vi": "Khó thở ở người có tiền sử hen",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA",
        "AHA2025BLS"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "RESP-04",
      "category": "Hô hấp, ngạt thở",
      "presentation_vi": "Hóc thức ăn còn ho được",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA",
        "AHA2025BLS"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "RESP-05",
      "category": "Hô hấp, ngạt thở",
      "presentation_vi": "Hóc thức ăn không nói hoặc ho được",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA",
        "AHA2025BLS"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "RESP-06",
      "category": "Hô hấp, ngạt thở",
      "presentation_vi": "Khó thở sau hít khói",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA",
        "AHA2025BLS"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "RESP-07",
      "category": "Hô hấp, ngạt thở",
      "presentation_vi": "Khó thở sau tiếp xúc khí lạ",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA",
        "AHA2025BLS"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "RESP-08",
      "category": "Hô hấp, ngạt thở",
      "presentation_vi": "Môi tím kèm khó thở",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA",
        "AHA2025BLS"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "LOC-01",
      "category": "Ngất, rối loạn ý thức",
      "presentation_vi": "Ngất khi đứng lâu",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA",
        "AHA2025BLS"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "LOC-02",
      "category": "Ngất, rối loạn ý thức",
      "presentation_vi": "Ngất sau khi gắng sức",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA",
        "AHA2025BLS"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "LOC-03",
      "category": "Ngất, rối loạn ý thức",
      "presentation_vi": "Ngất sau khi đứng dậy",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA",
        "AHA2025BLS"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "LOC-04",
      "category": "Ngất, rối loạn ý thức",
      "presentation_vi": "Ngất không rõ nguyên nhân",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA",
        "AHA2025BLS"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "LOC-05",
      "category": "Ngất, rối loạn ý thức",
      "presentation_vi": "Người không đáp ứng nhưng còn thở bình thường",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA",
        "AHA2025BLS"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "LOC-06",
      "category": "Ngất, rối loạn ý thức",
      "presentation_vi": "Lú lẫn đột ngột",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA",
        "AHA2025BLS"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "LOC-07",
      "category": "Ngất, rối loạn ý thức",
      "presentation_vi": "Người vừa tỉnh lại sau bất tỉnh",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA",
        "AHA2025BLS"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "NEURO-01",
      "category": "Thần kinh",
      "presentation_vi": "Méo miệng đột ngột",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "NEURO-02",
      "category": "Thần kinh",
      "presentation_vi": "Yếu một bên tay chân",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "NEURO-03",
      "category": "Thần kinh",
      "presentation_vi": "Nói khó đột ngột",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "NEURO-04",
      "category": "Thần kinh",
      "presentation_vi": "Đột ngột mất thăng bằng",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "NEURO-05",
      "category": "Thần kinh",
      "presentation_vi": "Đau đầu dữ dội khởi phát đột ngột",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "NEURO-06",
      "category": "Thần kinh",
      "presentation_vi": "Co giật lần đầu",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "NEURO-07",
      "category": "Thần kinh",
      "presentation_vi": "Co giật kéo dài",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "NEURO-08",
      "category": "Thần kinh",
      "presentation_vi": "Co giật tái diễn chưa tỉnh lại",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "ROAD-01",
      "category": "Tai nạn giao thông",
      "presentation_vi": "Ngã xe máy đập đầu",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "ROAD-02",
      "category": "Tai nạn giao thông",
      "presentation_vi": "Ngã xe đạp đau cổ",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "ROAD-03",
      "category": "Tai nạn giao thông",
      "presentation_vi": "Người đi bộ bị xe va chạm",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "ROAD-04",
      "category": "Tai nạn giao thông",
      "presentation_vi": "Người bị kẹt trong xe",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "ROAD-05",
      "category": "Tai nạn giao thông",
      "presentation_vi": "Va chạm xe kèm đau ngực",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "ROAD-06",
      "category": "Tai nạn giao thông",
      "presentation_vi": "Va chạm xe kèm đau bụng",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "ROAD-07",
      "category": "Tai nạn giao thông",
      "presentation_vi": "Người nằm bất động sau va chạm",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "TRAUMA-01",
      "category": "Chấn thương, gãy xương",
      "presentation_vi": "Đau và biến dạng cẳng tay",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "TRAUMA-02",
      "category": "Chấn thương, gãy xương",
      "presentation_vi": "Đau và biến dạng cẳng chân",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "TRAUMA-03",
      "category": "Chấn thương, gãy xương",
      "presentation_vi": "Nghi gãy xương hở",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "TRAUMA-04",
      "category": "Chấn thương, gãy xương",
      "presentation_vi": "Chấn thương cổ chân",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "TRAUMA-05",
      "category": "Chấn thương, gãy xương",
      "presentation_vi": "Chấn thương khớp vai",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "TRAUMA-06",
      "category": "Chấn thương, gãy xương",
      "presentation_vi": "Ngã cao đau lưng",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "TRAUMA-07",
      "category": "Chấn thương, gãy xương",
      "presentation_vi": "Chấn thương đầu kèm nôn",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "TRAUMA-08",
      "category": "Chấn thương, gãy xương",
      "presentation_vi": "Chấn thương hàm mặt",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "TRAUMA-09",
      "category": "Chấn thương, gãy xương",
      "presentation_vi": "Chấn thương bàn tay do máy",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "TRAUMA-10",
      "category": "Chấn thương, gãy xương",
      "presentation_vi": "Chấn thương đè ép",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "BLEED-01",
      "category": "Chảy máu, vết thương",
      "presentation_vi": "Vết cắt nhỏ",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "BLEED-02",
      "category": "Chảy máu, vết thương",
      "presentation_vi": "Vết cắt chảy máu nhiều",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "BLEED-03",
      "category": "Chảy máu, vết thương",
      "presentation_vi": "Vết thương xuyên có dị vật",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "BLEED-04",
      "category": "Chảy máu, vết thương",
      "presentation_vi": "Vết thương da đầu",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "BLEED-05",
      "category": "Chảy máu, vết thương",
      "presentation_vi": "Chảy máu mũi",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "BLEED-06",
      "category": "Chảy máu, vết thương",
      "presentation_vi": "Đứt lìa ngón tay",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "BLEED-07",
      "category": "Chảy máu, vết thương",
      "presentation_vi": "Vết đâm vùng ngực",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "BLEED-08",
      "category": "Chảy máu, vết thương",
      "presentation_vi": "Vết thương bụng có mô lộ ra",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "BURN-01",
      "category": "Bỏng",
      "presentation_vi": "Bỏng do nước sôi",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "BURN-02",
      "category": "Bỏng",
      "presentation_vi": "Bỏng do lửa",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "BURN-03",
      "category": "Bỏng",
      "presentation_vi": "Bỏng nghi do điện",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "BURN-04",
      "category": "Bỏng",
      "presentation_vi": "Bỏng hóa chất trên da",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "BURN-05",
      "category": "Bỏng",
      "presentation_vi": "Bỏng do hơi nước",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "BURN-06",
      "category": "Bỏng",
      "presentation_vi": "Bỏng diện rộng",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "POISON-01",
      "category": "Ngộ độc",
      "presentation_vi": "Nghi uống nhầm hóa chất tẩy rửa",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "POISON-02",
      "category": "Ngộ độc",
      "presentation_vi": "Nghi uống quá liều thuốc",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "POISON-03",
      "category": "Ngộ độc",
      "presentation_vi": "Nghi ngộ độc thuốc trừ sâu",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "POISON-04",
      "category": "Ngộ độc",
      "presentation_vi": "Nghi ngộ độc khí CO",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "POISON-05",
      "category": "Ngộ độc",
      "presentation_vi": "Hít phải hơi dung môi",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "POISON-06",
      "category": "Ngộ độc",
      "presentation_vi": "Nghi ngộ độc rượu",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "POISON-07",
      "category": "Ngộ độc",
      "presentation_vi": "Nôn tiêu chảy sau ăn",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "POISON-08",
      "category": "Ngộ độc",
      "presentation_vi": "Nghi ăn nấm độc",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "POISON-09",
      "category": "Ngộ độc",
      "presentation_vi": "Nghi quá liều opioid",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "ALLERGY-01",
      "category": "Dị ứng",
      "presentation_vi": "Mề đay sau ăn",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "ALLERGY-02",
      "category": "Dị ứng",
      "presentation_vi": "Sưng môi sau ăn",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "ALLERGY-03",
      "category": "Dị ứng",
      "presentation_vi": "Khó thở sau tiếp xúc dị nguyên",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "ALLERGY-04",
      "category": "Dị ứng",
      "presentation_vi": "Choáng sau khi dùng thuốc",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "ALLERGY-05",
      "category": "Dị ứng",
      "presentation_vi": "Dị ứng sau côn trùng đốt kèm triệu chứng toàn thân",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "BITE-01",
      "category": "Động vật, côn trùng",
      "presentation_vi": "Chó cắn",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "BITE-02",
      "category": "Động vật, côn trùng",
      "presentation_vi": "Mèo cắn",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "BITE-03",
      "category": "Động vật, côn trùng",
      "presentation_vi": "Rắn cắn không rõ loài",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "BITE-04",
      "category": "Động vật, côn trùng",
      "presentation_vi": "Ong đốt",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "BITE-05",
      "category": "Động vật, côn trùng",
      "presentation_vi": "Nhiều vết ong đốt",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "BITE-06",
      "category": "Động vật, côn trùng",
      "presentation_vi": "Sứa đốt",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "BITE-07",
      "category": "Động vật, côn trùng",
      "presentation_vi": "Vết động vật hoang dã cắn",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "WATER-01",
      "category": "Đuối nước",
      "presentation_vi": "Người được đưa lên bờ còn tỉnh nhưng ho",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA",
        "AHA2025BLS"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "WATER-02",
      "category": "Đuối nước",
      "presentation_vi": "Người được đưa lên bờ không đáp ứng",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA",
        "AHA2025BLS"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "WATER-03",
      "category": "Đuối nước",
      "presentation_vi": "Người còn ở dưới nước gặp nạn",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA",
        "AHA2025BLS"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "TEMP-01",
      "category": "Nhiệt độ môi trường",
      "presentation_vi": "Kiệt sức khi trời nóng",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "TEMP-02",
      "category": "Nhiệt độ môi trường",
      "presentation_vi": "Lú lẫn sau phơi nóng",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "TEMP-03",
      "category": "Nhiệt độ môi trường",
      "presentation_vi": "Chuột rút khi vận động nóng",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "TEMP-04",
      "category": "Nhiệt độ môi trường",
      "presentation_vi": "Hạ thân nhiệt sau ngâm nước lạnh",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "TEMP-05",
      "category": "Nhiệt độ môi trường",
      "presentation_vi": "Tổn thương da do lạnh",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "PED-01",
      "category": "Trẻ sơ sinh, trẻ em",
      "presentation_vi": "Trẻ sơ sinh hóc dị vật",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA",
        "AHA2025BLS"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "PED-02",
      "category": "Trẻ sơ sinh, trẻ em",
      "presentation_vi": "Trẻ nhỏ hóc dị vật",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA",
        "AHA2025BLS"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "PED-03",
      "category": "Trẻ sơ sinh, trẻ em",
      "presentation_vi": "Trẻ nhỏ không đáp ứng và không thở bình thường",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA",
        "AHA2025BLS"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "PED-04",
      "category": "Trẻ sơ sinh, trẻ em",
      "presentation_vi": "Trẻ sơ sinh không đáp ứng và không thở bình thường",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA",
        "AHA2025BLS"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "PED-05",
      "category": "Trẻ sơ sinh, trẻ em",
      "presentation_vi": "Trẻ co giật kèm sốt",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA",
        "AHA2025BLS"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "PED-06",
      "category": "Trẻ sơ sinh, trẻ em",
      "presentation_vi": "Trẻ khó thở",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA",
        "AHA2025BLS"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "PED-07",
      "category": "Trẻ sơ sinh, trẻ em",
      "presentation_vi": "Trẻ nuốt pin cúc áo",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA",
        "AHA2025BLS"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "PED-08",
      "category": "Trẻ sơ sinh, trẻ em",
      "presentation_vi": "Trẻ nôn tiêu chảy kèm dấu mất nước",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA",
        "AHA2025BLS"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "PREG-01",
      "category": "Thai kỳ",
      "presentation_vi": "Thai phụ đau bụng dữ dội",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "PREG-02",
      "category": "Thai kỳ",
      "presentation_vi": "Thai phụ ra máu âm đạo",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "PREG-03",
      "category": "Thai kỳ",
      "presentation_vi": "Thai phụ co giật",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "PREG-04",
      "category": "Thai kỳ",
      "presentation_vi": "Thai phụ bất tỉnh",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "PREG-05",
      "category": "Thai kỳ",
      "presentation_vi": "Sản phụ chảy máu nhiều sau sinh",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "MET-01",
      "category": "Chuyển hóa",
      "presentation_vi": "Người mắc đái tháo đường vã mồ hôi và run",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "MET-02",
      "category": "Chuyển hóa",
      "presentation_vi": "Người mắc đái tháo đường lú lẫn",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "MET-03",
      "category": "Chuyển hóa",
      "presentation_vi": "Người mắc đái tháo đường không đáp ứng",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "MET-04",
      "category": "Chuyển hóa",
      "presentation_vi": "Khát nhiều kèm nôn ở người đái tháo đường",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "MET-05",
      "category": "Chuyển hóa",
      "presentation_vi": "Yếu và chóng mặt sau nhịn ăn",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "ENT-01",
      "category": "Mắt, tai, mũi, họng",
      "presentation_vi": "Hóa chất bắn vào mắt",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "ENT-02",
      "category": "Mắt, tai, mũi, họng",
      "presentation_vi": "Dị vật nhỏ vào mắt",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "ENT-03",
      "category": "Mắt, tai, mũi, họng",
      "presentation_vi": "Vật nhọn đâm vào mắt",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "ENT-04",
      "category": "Mắt, tai, mũi, họng",
      "presentation_vi": "Dị vật trong tai",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "ENT-05",
      "category": "Mắt, tai, mũi, họng",
      "presentation_vi": "Dị vật trong mũi",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "PSY-01",
      "category": "Khủng hoảng tâm lý",
      "presentation_vi": "Hoảng loạn kèm thở nhanh",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "PSY-02",
      "category": "Khủng hoảng tâm lý",
      "presentation_vi": "Người kích động không rõ nguyên nhân",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "PSY-03",
      "category": "Khủng hoảng tâm lý",
      "presentation_vi": "Người có ý định tự làm hại bản thân",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "PSY-04",
      "category": "Khủng hoảng tâm lý",
      "presentation_vi": "Người hoảng sợ sau tai nạn",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "MULTI-01",
      "category": "Đa chấn thương hoặc đa triệu chứng",
      "presentation_vi": "Tai nạn có chảy máu nhiều và không đáp ứng",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA",
        "AHA2025BLS"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    },
    {
      "id": "MULTI-02",
      "category": "Đa chấn thương hoặc đa triệu chứng",
      "presentation_vi": "Nhiều nạn nhân sau một sự cố",
      "source_candidates": [
        "IFRC2025",
        "AHA2024",
        "RC",
        "SJA",
        "AHA2025BLS"
      ],
      "clinical_status": "UNREVIEWED",
      "protocol_id": null,
      "clinical_instructions": null,
      "runtime_enabled": false
    }
  ],
  "qa_variants": [
    {
      "id": "CARD-01-V01",
      "base_id": "CARD-01",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-01-V02",
      "base_id": "CARD-01",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-01-V03",
      "base_id": "CARD-01",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-01-V04",
      "base_id": "CARD-01",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-01-V05",
      "base_id": "CARD-01",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-01-V06",
      "base_id": "CARD-01",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-01-V07",
      "base_id": "CARD-01",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-01-V08",
      "base_id": "CARD-01",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-01-V09",
      "base_id": "CARD-01",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-01-V10",
      "base_id": "CARD-01",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-02-V01",
      "base_id": "CARD-02",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-02-V02",
      "base_id": "CARD-02",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-02-V03",
      "base_id": "CARD-02",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-02-V04",
      "base_id": "CARD-02",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-02-V05",
      "base_id": "CARD-02",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-02-V06",
      "base_id": "CARD-02",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-02-V07",
      "base_id": "CARD-02",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-02-V08",
      "base_id": "CARD-02",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-02-V09",
      "base_id": "CARD-02",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-02-V10",
      "base_id": "CARD-02",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-03-V01",
      "base_id": "CARD-03",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-03-V02",
      "base_id": "CARD-03",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-03-V03",
      "base_id": "CARD-03",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-03-V04",
      "base_id": "CARD-03",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-03-V05",
      "base_id": "CARD-03",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-03-V06",
      "base_id": "CARD-03",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-03-V07",
      "base_id": "CARD-03",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-03-V08",
      "base_id": "CARD-03",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-03-V09",
      "base_id": "CARD-03",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-03-V10",
      "base_id": "CARD-03",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-04-V01",
      "base_id": "CARD-04",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-04-V02",
      "base_id": "CARD-04",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-04-V03",
      "base_id": "CARD-04",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-04-V04",
      "base_id": "CARD-04",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-04-V05",
      "base_id": "CARD-04",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-04-V06",
      "base_id": "CARD-04",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-04-V07",
      "base_id": "CARD-04",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-04-V08",
      "base_id": "CARD-04",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-04-V09",
      "base_id": "CARD-04",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-04-V10",
      "base_id": "CARD-04",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-05-V01",
      "base_id": "CARD-05",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-05-V02",
      "base_id": "CARD-05",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-05-V03",
      "base_id": "CARD-05",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-05-V04",
      "base_id": "CARD-05",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-05-V05",
      "base_id": "CARD-05",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-05-V06",
      "base_id": "CARD-05",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-05-V07",
      "base_id": "CARD-05",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-05-V08",
      "base_id": "CARD-05",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-05-V09",
      "base_id": "CARD-05",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-05-V10",
      "base_id": "CARD-05",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-06-V01",
      "base_id": "CARD-06",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-06-V02",
      "base_id": "CARD-06",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-06-V03",
      "base_id": "CARD-06",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-06-V04",
      "base_id": "CARD-06",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-06-V05",
      "base_id": "CARD-06",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-06-V06",
      "base_id": "CARD-06",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-06-V07",
      "base_id": "CARD-06",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-06-V08",
      "base_id": "CARD-06",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-06-V09",
      "base_id": "CARD-06",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-06-V10",
      "base_id": "CARD-06",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-07-V01",
      "base_id": "CARD-07",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-07-V02",
      "base_id": "CARD-07",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-07-V03",
      "base_id": "CARD-07",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-07-V04",
      "base_id": "CARD-07",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-07-V05",
      "base_id": "CARD-07",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-07-V06",
      "base_id": "CARD-07",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-07-V07",
      "base_id": "CARD-07",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-07-V08",
      "base_id": "CARD-07",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-07-V09",
      "base_id": "CARD-07",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-07-V10",
      "base_id": "CARD-07",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-08-V01",
      "base_id": "CARD-08",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-08-V02",
      "base_id": "CARD-08",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-08-V03",
      "base_id": "CARD-08",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-08-V04",
      "base_id": "CARD-08",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-08-V05",
      "base_id": "CARD-08",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-08-V06",
      "base_id": "CARD-08",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-08-V07",
      "base_id": "CARD-08",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-08-V08",
      "base_id": "CARD-08",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-08-V09",
      "base_id": "CARD-08",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "CARD-08-V10",
      "base_id": "CARD-08",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-01-V01",
      "base_id": "RESP-01",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-01-V02",
      "base_id": "RESP-01",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-01-V03",
      "base_id": "RESP-01",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-01-V04",
      "base_id": "RESP-01",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-01-V05",
      "base_id": "RESP-01",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-01-V06",
      "base_id": "RESP-01",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-01-V07",
      "base_id": "RESP-01",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-01-V08",
      "base_id": "RESP-01",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-01-V09",
      "base_id": "RESP-01",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-01-V10",
      "base_id": "RESP-01",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-02-V01",
      "base_id": "RESP-02",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-02-V02",
      "base_id": "RESP-02",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-02-V03",
      "base_id": "RESP-02",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-02-V04",
      "base_id": "RESP-02",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-02-V05",
      "base_id": "RESP-02",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-02-V06",
      "base_id": "RESP-02",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-02-V07",
      "base_id": "RESP-02",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-02-V08",
      "base_id": "RESP-02",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-02-V09",
      "base_id": "RESP-02",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-02-V10",
      "base_id": "RESP-02",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-03-V01",
      "base_id": "RESP-03",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-03-V02",
      "base_id": "RESP-03",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-03-V03",
      "base_id": "RESP-03",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-03-V04",
      "base_id": "RESP-03",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-03-V05",
      "base_id": "RESP-03",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-03-V06",
      "base_id": "RESP-03",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-03-V07",
      "base_id": "RESP-03",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-03-V08",
      "base_id": "RESP-03",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-03-V09",
      "base_id": "RESP-03",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-03-V10",
      "base_id": "RESP-03",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-04-V01",
      "base_id": "RESP-04",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-04-V02",
      "base_id": "RESP-04",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-04-V03",
      "base_id": "RESP-04",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-04-V04",
      "base_id": "RESP-04",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-04-V05",
      "base_id": "RESP-04",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-04-V06",
      "base_id": "RESP-04",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-04-V07",
      "base_id": "RESP-04",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-04-V08",
      "base_id": "RESP-04",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-04-V09",
      "base_id": "RESP-04",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-04-V10",
      "base_id": "RESP-04",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-05-V01",
      "base_id": "RESP-05",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-05-V02",
      "base_id": "RESP-05",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-05-V03",
      "base_id": "RESP-05",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-05-V04",
      "base_id": "RESP-05",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-05-V05",
      "base_id": "RESP-05",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-05-V06",
      "base_id": "RESP-05",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-05-V07",
      "base_id": "RESP-05",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-05-V08",
      "base_id": "RESP-05",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-05-V09",
      "base_id": "RESP-05",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-05-V10",
      "base_id": "RESP-05",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-06-V01",
      "base_id": "RESP-06",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-06-V02",
      "base_id": "RESP-06",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-06-V03",
      "base_id": "RESP-06",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-06-V04",
      "base_id": "RESP-06",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-06-V05",
      "base_id": "RESP-06",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-06-V06",
      "base_id": "RESP-06",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-06-V07",
      "base_id": "RESP-06",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-06-V08",
      "base_id": "RESP-06",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-06-V09",
      "base_id": "RESP-06",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-06-V10",
      "base_id": "RESP-06",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-07-V01",
      "base_id": "RESP-07",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-07-V02",
      "base_id": "RESP-07",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-07-V03",
      "base_id": "RESP-07",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-07-V04",
      "base_id": "RESP-07",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-07-V05",
      "base_id": "RESP-07",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-07-V06",
      "base_id": "RESP-07",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-07-V07",
      "base_id": "RESP-07",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-07-V08",
      "base_id": "RESP-07",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-07-V09",
      "base_id": "RESP-07",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-07-V10",
      "base_id": "RESP-07",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-08-V01",
      "base_id": "RESP-08",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-08-V02",
      "base_id": "RESP-08",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-08-V03",
      "base_id": "RESP-08",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-08-V04",
      "base_id": "RESP-08",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-08-V05",
      "base_id": "RESP-08",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-08-V06",
      "base_id": "RESP-08",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-08-V07",
      "base_id": "RESP-08",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-08-V08",
      "base_id": "RESP-08",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-08-V09",
      "base_id": "RESP-08",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "RESP-08-V10",
      "base_id": "RESP-08",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-01-V01",
      "base_id": "LOC-01",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-01-V02",
      "base_id": "LOC-01",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-01-V03",
      "base_id": "LOC-01",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-01-V04",
      "base_id": "LOC-01",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-01-V05",
      "base_id": "LOC-01",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-01-V06",
      "base_id": "LOC-01",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-01-V07",
      "base_id": "LOC-01",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-01-V08",
      "base_id": "LOC-01",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-01-V09",
      "base_id": "LOC-01",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-01-V10",
      "base_id": "LOC-01",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-02-V01",
      "base_id": "LOC-02",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-02-V02",
      "base_id": "LOC-02",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-02-V03",
      "base_id": "LOC-02",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-02-V04",
      "base_id": "LOC-02",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-02-V05",
      "base_id": "LOC-02",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-02-V06",
      "base_id": "LOC-02",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-02-V07",
      "base_id": "LOC-02",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-02-V08",
      "base_id": "LOC-02",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-02-V09",
      "base_id": "LOC-02",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-02-V10",
      "base_id": "LOC-02",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-03-V01",
      "base_id": "LOC-03",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-03-V02",
      "base_id": "LOC-03",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-03-V03",
      "base_id": "LOC-03",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-03-V04",
      "base_id": "LOC-03",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-03-V05",
      "base_id": "LOC-03",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-03-V06",
      "base_id": "LOC-03",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-03-V07",
      "base_id": "LOC-03",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-03-V08",
      "base_id": "LOC-03",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-03-V09",
      "base_id": "LOC-03",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-03-V10",
      "base_id": "LOC-03",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-04-V01",
      "base_id": "LOC-04",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-04-V02",
      "base_id": "LOC-04",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-04-V03",
      "base_id": "LOC-04",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-04-V04",
      "base_id": "LOC-04",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-04-V05",
      "base_id": "LOC-04",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-04-V06",
      "base_id": "LOC-04",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-04-V07",
      "base_id": "LOC-04",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-04-V08",
      "base_id": "LOC-04",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-04-V09",
      "base_id": "LOC-04",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-04-V10",
      "base_id": "LOC-04",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-05-V01",
      "base_id": "LOC-05",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-05-V02",
      "base_id": "LOC-05",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-05-V03",
      "base_id": "LOC-05",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-05-V04",
      "base_id": "LOC-05",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-05-V05",
      "base_id": "LOC-05",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-05-V06",
      "base_id": "LOC-05",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-05-V07",
      "base_id": "LOC-05",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-05-V08",
      "base_id": "LOC-05",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-05-V09",
      "base_id": "LOC-05",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-05-V10",
      "base_id": "LOC-05",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-06-V01",
      "base_id": "LOC-06",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-06-V02",
      "base_id": "LOC-06",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-06-V03",
      "base_id": "LOC-06",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-06-V04",
      "base_id": "LOC-06",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-06-V05",
      "base_id": "LOC-06",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-06-V06",
      "base_id": "LOC-06",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-06-V07",
      "base_id": "LOC-06",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-06-V08",
      "base_id": "LOC-06",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-06-V09",
      "base_id": "LOC-06",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-06-V10",
      "base_id": "LOC-06",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-07-V01",
      "base_id": "LOC-07",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-07-V02",
      "base_id": "LOC-07",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-07-V03",
      "base_id": "LOC-07",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-07-V04",
      "base_id": "LOC-07",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-07-V05",
      "base_id": "LOC-07",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-07-V06",
      "base_id": "LOC-07",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-07-V07",
      "base_id": "LOC-07",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-07-V08",
      "base_id": "LOC-07",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-07-V09",
      "base_id": "LOC-07",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "LOC-07-V10",
      "base_id": "LOC-07",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-01-V01",
      "base_id": "NEURO-01",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-01-V02",
      "base_id": "NEURO-01",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-01-V03",
      "base_id": "NEURO-01",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-01-V04",
      "base_id": "NEURO-01",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-01-V05",
      "base_id": "NEURO-01",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-01-V06",
      "base_id": "NEURO-01",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-01-V07",
      "base_id": "NEURO-01",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-01-V08",
      "base_id": "NEURO-01",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-01-V09",
      "base_id": "NEURO-01",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-01-V10",
      "base_id": "NEURO-01",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-02-V01",
      "base_id": "NEURO-02",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-02-V02",
      "base_id": "NEURO-02",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-02-V03",
      "base_id": "NEURO-02",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-02-V04",
      "base_id": "NEURO-02",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-02-V05",
      "base_id": "NEURO-02",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-02-V06",
      "base_id": "NEURO-02",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-02-V07",
      "base_id": "NEURO-02",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-02-V08",
      "base_id": "NEURO-02",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-02-V09",
      "base_id": "NEURO-02",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-02-V10",
      "base_id": "NEURO-02",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-03-V01",
      "base_id": "NEURO-03",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-03-V02",
      "base_id": "NEURO-03",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-03-V03",
      "base_id": "NEURO-03",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-03-V04",
      "base_id": "NEURO-03",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-03-V05",
      "base_id": "NEURO-03",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-03-V06",
      "base_id": "NEURO-03",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-03-V07",
      "base_id": "NEURO-03",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-03-V08",
      "base_id": "NEURO-03",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-03-V09",
      "base_id": "NEURO-03",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-03-V10",
      "base_id": "NEURO-03",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-04-V01",
      "base_id": "NEURO-04",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-04-V02",
      "base_id": "NEURO-04",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-04-V03",
      "base_id": "NEURO-04",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-04-V04",
      "base_id": "NEURO-04",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-04-V05",
      "base_id": "NEURO-04",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-04-V06",
      "base_id": "NEURO-04",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-04-V07",
      "base_id": "NEURO-04",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-04-V08",
      "base_id": "NEURO-04",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-04-V09",
      "base_id": "NEURO-04",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-04-V10",
      "base_id": "NEURO-04",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-05-V01",
      "base_id": "NEURO-05",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-05-V02",
      "base_id": "NEURO-05",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-05-V03",
      "base_id": "NEURO-05",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-05-V04",
      "base_id": "NEURO-05",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-05-V05",
      "base_id": "NEURO-05",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-05-V06",
      "base_id": "NEURO-05",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-05-V07",
      "base_id": "NEURO-05",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-05-V08",
      "base_id": "NEURO-05",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-05-V09",
      "base_id": "NEURO-05",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-05-V10",
      "base_id": "NEURO-05",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-06-V01",
      "base_id": "NEURO-06",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-06-V02",
      "base_id": "NEURO-06",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-06-V03",
      "base_id": "NEURO-06",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-06-V04",
      "base_id": "NEURO-06",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-06-V05",
      "base_id": "NEURO-06",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-06-V06",
      "base_id": "NEURO-06",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-06-V07",
      "base_id": "NEURO-06",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-06-V08",
      "base_id": "NEURO-06",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-06-V09",
      "base_id": "NEURO-06",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-06-V10",
      "base_id": "NEURO-06",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-07-V01",
      "base_id": "NEURO-07",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-07-V02",
      "base_id": "NEURO-07",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-07-V03",
      "base_id": "NEURO-07",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-07-V04",
      "base_id": "NEURO-07",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-07-V05",
      "base_id": "NEURO-07",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-07-V06",
      "base_id": "NEURO-07",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-07-V07",
      "base_id": "NEURO-07",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-07-V08",
      "base_id": "NEURO-07",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-07-V09",
      "base_id": "NEURO-07",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-07-V10",
      "base_id": "NEURO-07",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-08-V01",
      "base_id": "NEURO-08",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-08-V02",
      "base_id": "NEURO-08",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-08-V03",
      "base_id": "NEURO-08",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-08-V04",
      "base_id": "NEURO-08",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-08-V05",
      "base_id": "NEURO-08",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-08-V06",
      "base_id": "NEURO-08",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-08-V07",
      "base_id": "NEURO-08",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-08-V08",
      "base_id": "NEURO-08",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-08-V09",
      "base_id": "NEURO-08",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "NEURO-08-V10",
      "base_id": "NEURO-08",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-01-V01",
      "base_id": "ROAD-01",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-01-V02",
      "base_id": "ROAD-01",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-01-V03",
      "base_id": "ROAD-01",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-01-V04",
      "base_id": "ROAD-01",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-01-V05",
      "base_id": "ROAD-01",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-01-V06",
      "base_id": "ROAD-01",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-01-V07",
      "base_id": "ROAD-01",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-01-V08",
      "base_id": "ROAD-01",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-01-V09",
      "base_id": "ROAD-01",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-01-V10",
      "base_id": "ROAD-01",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-02-V01",
      "base_id": "ROAD-02",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-02-V02",
      "base_id": "ROAD-02",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-02-V03",
      "base_id": "ROAD-02",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-02-V04",
      "base_id": "ROAD-02",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-02-V05",
      "base_id": "ROAD-02",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-02-V06",
      "base_id": "ROAD-02",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-02-V07",
      "base_id": "ROAD-02",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-02-V08",
      "base_id": "ROAD-02",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-02-V09",
      "base_id": "ROAD-02",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-02-V10",
      "base_id": "ROAD-02",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-03-V01",
      "base_id": "ROAD-03",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-03-V02",
      "base_id": "ROAD-03",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-03-V03",
      "base_id": "ROAD-03",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-03-V04",
      "base_id": "ROAD-03",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-03-V05",
      "base_id": "ROAD-03",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-03-V06",
      "base_id": "ROAD-03",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-03-V07",
      "base_id": "ROAD-03",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-03-V08",
      "base_id": "ROAD-03",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-03-V09",
      "base_id": "ROAD-03",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-03-V10",
      "base_id": "ROAD-03",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-04-V01",
      "base_id": "ROAD-04",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-04-V02",
      "base_id": "ROAD-04",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-04-V03",
      "base_id": "ROAD-04",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-04-V04",
      "base_id": "ROAD-04",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-04-V05",
      "base_id": "ROAD-04",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-04-V06",
      "base_id": "ROAD-04",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-04-V07",
      "base_id": "ROAD-04",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-04-V08",
      "base_id": "ROAD-04",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-04-V09",
      "base_id": "ROAD-04",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-04-V10",
      "base_id": "ROAD-04",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-05-V01",
      "base_id": "ROAD-05",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-05-V02",
      "base_id": "ROAD-05",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-05-V03",
      "base_id": "ROAD-05",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-05-V04",
      "base_id": "ROAD-05",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-05-V05",
      "base_id": "ROAD-05",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-05-V06",
      "base_id": "ROAD-05",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-05-V07",
      "base_id": "ROAD-05",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-05-V08",
      "base_id": "ROAD-05",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-05-V09",
      "base_id": "ROAD-05",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-05-V10",
      "base_id": "ROAD-05",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-06-V01",
      "base_id": "ROAD-06",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-06-V02",
      "base_id": "ROAD-06",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-06-V03",
      "base_id": "ROAD-06",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-06-V04",
      "base_id": "ROAD-06",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-06-V05",
      "base_id": "ROAD-06",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-06-V06",
      "base_id": "ROAD-06",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-06-V07",
      "base_id": "ROAD-06",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-06-V08",
      "base_id": "ROAD-06",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-06-V09",
      "base_id": "ROAD-06",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-06-V10",
      "base_id": "ROAD-06",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-07-V01",
      "base_id": "ROAD-07",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-07-V02",
      "base_id": "ROAD-07",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-07-V03",
      "base_id": "ROAD-07",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-07-V04",
      "base_id": "ROAD-07",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-07-V05",
      "base_id": "ROAD-07",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-07-V06",
      "base_id": "ROAD-07",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-07-V07",
      "base_id": "ROAD-07",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-07-V08",
      "base_id": "ROAD-07",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-07-V09",
      "base_id": "ROAD-07",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ROAD-07-V10",
      "base_id": "ROAD-07",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-01-V01",
      "base_id": "TRAUMA-01",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-01-V02",
      "base_id": "TRAUMA-01",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-01-V03",
      "base_id": "TRAUMA-01",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-01-V04",
      "base_id": "TRAUMA-01",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-01-V05",
      "base_id": "TRAUMA-01",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-01-V06",
      "base_id": "TRAUMA-01",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-01-V07",
      "base_id": "TRAUMA-01",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-01-V08",
      "base_id": "TRAUMA-01",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-01-V09",
      "base_id": "TRAUMA-01",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-01-V10",
      "base_id": "TRAUMA-01",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-02-V01",
      "base_id": "TRAUMA-02",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-02-V02",
      "base_id": "TRAUMA-02",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-02-V03",
      "base_id": "TRAUMA-02",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-02-V04",
      "base_id": "TRAUMA-02",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-02-V05",
      "base_id": "TRAUMA-02",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-02-V06",
      "base_id": "TRAUMA-02",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-02-V07",
      "base_id": "TRAUMA-02",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-02-V08",
      "base_id": "TRAUMA-02",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-02-V09",
      "base_id": "TRAUMA-02",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-02-V10",
      "base_id": "TRAUMA-02",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-03-V01",
      "base_id": "TRAUMA-03",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-03-V02",
      "base_id": "TRAUMA-03",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-03-V03",
      "base_id": "TRAUMA-03",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-03-V04",
      "base_id": "TRAUMA-03",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-03-V05",
      "base_id": "TRAUMA-03",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-03-V06",
      "base_id": "TRAUMA-03",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-03-V07",
      "base_id": "TRAUMA-03",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-03-V08",
      "base_id": "TRAUMA-03",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-03-V09",
      "base_id": "TRAUMA-03",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-03-V10",
      "base_id": "TRAUMA-03",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-04-V01",
      "base_id": "TRAUMA-04",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-04-V02",
      "base_id": "TRAUMA-04",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-04-V03",
      "base_id": "TRAUMA-04",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-04-V04",
      "base_id": "TRAUMA-04",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-04-V05",
      "base_id": "TRAUMA-04",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-04-V06",
      "base_id": "TRAUMA-04",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-04-V07",
      "base_id": "TRAUMA-04",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-04-V08",
      "base_id": "TRAUMA-04",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-04-V09",
      "base_id": "TRAUMA-04",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-04-V10",
      "base_id": "TRAUMA-04",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-05-V01",
      "base_id": "TRAUMA-05",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-05-V02",
      "base_id": "TRAUMA-05",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-05-V03",
      "base_id": "TRAUMA-05",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-05-V04",
      "base_id": "TRAUMA-05",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-05-V05",
      "base_id": "TRAUMA-05",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-05-V06",
      "base_id": "TRAUMA-05",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-05-V07",
      "base_id": "TRAUMA-05",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-05-V08",
      "base_id": "TRAUMA-05",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-05-V09",
      "base_id": "TRAUMA-05",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-05-V10",
      "base_id": "TRAUMA-05",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-06-V01",
      "base_id": "TRAUMA-06",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-06-V02",
      "base_id": "TRAUMA-06",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-06-V03",
      "base_id": "TRAUMA-06",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-06-V04",
      "base_id": "TRAUMA-06",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-06-V05",
      "base_id": "TRAUMA-06",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-06-V06",
      "base_id": "TRAUMA-06",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-06-V07",
      "base_id": "TRAUMA-06",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-06-V08",
      "base_id": "TRAUMA-06",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-06-V09",
      "base_id": "TRAUMA-06",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-06-V10",
      "base_id": "TRAUMA-06",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-07-V01",
      "base_id": "TRAUMA-07",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-07-V02",
      "base_id": "TRAUMA-07",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-07-V03",
      "base_id": "TRAUMA-07",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-07-V04",
      "base_id": "TRAUMA-07",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-07-V05",
      "base_id": "TRAUMA-07",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-07-V06",
      "base_id": "TRAUMA-07",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-07-V07",
      "base_id": "TRAUMA-07",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-07-V08",
      "base_id": "TRAUMA-07",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-07-V09",
      "base_id": "TRAUMA-07",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-07-V10",
      "base_id": "TRAUMA-07",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-08-V01",
      "base_id": "TRAUMA-08",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-08-V02",
      "base_id": "TRAUMA-08",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-08-V03",
      "base_id": "TRAUMA-08",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-08-V04",
      "base_id": "TRAUMA-08",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-08-V05",
      "base_id": "TRAUMA-08",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-08-V06",
      "base_id": "TRAUMA-08",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-08-V07",
      "base_id": "TRAUMA-08",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-08-V08",
      "base_id": "TRAUMA-08",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-08-V09",
      "base_id": "TRAUMA-08",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-08-V10",
      "base_id": "TRAUMA-08",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-09-V01",
      "base_id": "TRAUMA-09",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-09-V02",
      "base_id": "TRAUMA-09",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-09-V03",
      "base_id": "TRAUMA-09",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-09-V04",
      "base_id": "TRAUMA-09",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-09-V05",
      "base_id": "TRAUMA-09",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-09-V06",
      "base_id": "TRAUMA-09",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-09-V07",
      "base_id": "TRAUMA-09",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-09-V08",
      "base_id": "TRAUMA-09",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-09-V09",
      "base_id": "TRAUMA-09",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-09-V10",
      "base_id": "TRAUMA-09",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-10-V01",
      "base_id": "TRAUMA-10",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-10-V02",
      "base_id": "TRAUMA-10",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-10-V03",
      "base_id": "TRAUMA-10",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-10-V04",
      "base_id": "TRAUMA-10",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-10-V05",
      "base_id": "TRAUMA-10",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-10-V06",
      "base_id": "TRAUMA-10",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-10-V07",
      "base_id": "TRAUMA-10",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-10-V08",
      "base_id": "TRAUMA-10",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-10-V09",
      "base_id": "TRAUMA-10",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TRAUMA-10-V10",
      "base_id": "TRAUMA-10",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-01-V01",
      "base_id": "BLEED-01",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-01-V02",
      "base_id": "BLEED-01",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-01-V03",
      "base_id": "BLEED-01",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-01-V04",
      "base_id": "BLEED-01",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-01-V05",
      "base_id": "BLEED-01",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-01-V06",
      "base_id": "BLEED-01",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-01-V07",
      "base_id": "BLEED-01",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-01-V08",
      "base_id": "BLEED-01",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-01-V09",
      "base_id": "BLEED-01",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-01-V10",
      "base_id": "BLEED-01",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-02-V01",
      "base_id": "BLEED-02",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-02-V02",
      "base_id": "BLEED-02",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-02-V03",
      "base_id": "BLEED-02",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-02-V04",
      "base_id": "BLEED-02",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-02-V05",
      "base_id": "BLEED-02",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-02-V06",
      "base_id": "BLEED-02",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-02-V07",
      "base_id": "BLEED-02",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-02-V08",
      "base_id": "BLEED-02",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-02-V09",
      "base_id": "BLEED-02",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-02-V10",
      "base_id": "BLEED-02",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-03-V01",
      "base_id": "BLEED-03",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-03-V02",
      "base_id": "BLEED-03",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-03-V03",
      "base_id": "BLEED-03",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-03-V04",
      "base_id": "BLEED-03",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-03-V05",
      "base_id": "BLEED-03",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-03-V06",
      "base_id": "BLEED-03",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-03-V07",
      "base_id": "BLEED-03",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-03-V08",
      "base_id": "BLEED-03",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-03-V09",
      "base_id": "BLEED-03",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-03-V10",
      "base_id": "BLEED-03",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-04-V01",
      "base_id": "BLEED-04",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-04-V02",
      "base_id": "BLEED-04",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-04-V03",
      "base_id": "BLEED-04",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-04-V04",
      "base_id": "BLEED-04",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-04-V05",
      "base_id": "BLEED-04",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-04-V06",
      "base_id": "BLEED-04",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-04-V07",
      "base_id": "BLEED-04",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-04-V08",
      "base_id": "BLEED-04",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-04-V09",
      "base_id": "BLEED-04",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-04-V10",
      "base_id": "BLEED-04",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-05-V01",
      "base_id": "BLEED-05",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-05-V02",
      "base_id": "BLEED-05",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-05-V03",
      "base_id": "BLEED-05",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-05-V04",
      "base_id": "BLEED-05",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-05-V05",
      "base_id": "BLEED-05",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-05-V06",
      "base_id": "BLEED-05",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-05-V07",
      "base_id": "BLEED-05",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-05-V08",
      "base_id": "BLEED-05",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-05-V09",
      "base_id": "BLEED-05",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-05-V10",
      "base_id": "BLEED-05",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-06-V01",
      "base_id": "BLEED-06",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-06-V02",
      "base_id": "BLEED-06",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-06-V03",
      "base_id": "BLEED-06",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-06-V04",
      "base_id": "BLEED-06",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-06-V05",
      "base_id": "BLEED-06",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-06-V06",
      "base_id": "BLEED-06",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-06-V07",
      "base_id": "BLEED-06",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-06-V08",
      "base_id": "BLEED-06",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-06-V09",
      "base_id": "BLEED-06",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-06-V10",
      "base_id": "BLEED-06",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-07-V01",
      "base_id": "BLEED-07",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-07-V02",
      "base_id": "BLEED-07",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-07-V03",
      "base_id": "BLEED-07",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-07-V04",
      "base_id": "BLEED-07",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-07-V05",
      "base_id": "BLEED-07",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-07-V06",
      "base_id": "BLEED-07",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-07-V07",
      "base_id": "BLEED-07",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-07-V08",
      "base_id": "BLEED-07",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-07-V09",
      "base_id": "BLEED-07",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-07-V10",
      "base_id": "BLEED-07",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-08-V01",
      "base_id": "BLEED-08",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-08-V02",
      "base_id": "BLEED-08",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-08-V03",
      "base_id": "BLEED-08",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-08-V04",
      "base_id": "BLEED-08",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-08-V05",
      "base_id": "BLEED-08",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-08-V06",
      "base_id": "BLEED-08",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-08-V07",
      "base_id": "BLEED-08",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-08-V08",
      "base_id": "BLEED-08",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-08-V09",
      "base_id": "BLEED-08",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BLEED-08-V10",
      "base_id": "BLEED-08",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BURN-01-V01",
      "base_id": "BURN-01",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BURN-01-V02",
      "base_id": "BURN-01",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BURN-01-V03",
      "base_id": "BURN-01",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BURN-01-V04",
      "base_id": "BURN-01",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BURN-01-V05",
      "base_id": "BURN-01",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BURN-01-V06",
      "base_id": "BURN-01",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BURN-01-V07",
      "base_id": "BURN-01",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BURN-01-V08",
      "base_id": "BURN-01",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BURN-01-V09",
      "base_id": "BURN-01",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BURN-01-V10",
      "base_id": "BURN-01",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BURN-02-V01",
      "base_id": "BURN-02",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BURN-02-V02",
      "base_id": "BURN-02",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BURN-02-V03",
      "base_id": "BURN-02",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BURN-02-V04",
      "base_id": "BURN-02",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BURN-02-V05",
      "base_id": "BURN-02",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BURN-02-V06",
      "base_id": "BURN-02",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BURN-02-V07",
      "base_id": "BURN-02",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BURN-02-V08",
      "base_id": "BURN-02",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BURN-02-V09",
      "base_id": "BURN-02",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BURN-02-V10",
      "base_id": "BURN-02",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BURN-03-V01",
      "base_id": "BURN-03",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BURN-03-V02",
      "base_id": "BURN-03",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BURN-03-V03",
      "base_id": "BURN-03",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BURN-03-V04",
      "base_id": "BURN-03",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BURN-03-V05",
      "base_id": "BURN-03",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BURN-03-V06",
      "base_id": "BURN-03",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BURN-03-V07",
      "base_id": "BURN-03",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BURN-03-V08",
      "base_id": "BURN-03",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BURN-03-V09",
      "base_id": "BURN-03",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BURN-03-V10",
      "base_id": "BURN-03",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BURN-04-V01",
      "base_id": "BURN-04",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BURN-04-V02",
      "base_id": "BURN-04",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BURN-04-V03",
      "base_id": "BURN-04",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BURN-04-V04",
      "base_id": "BURN-04",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BURN-04-V05",
      "base_id": "BURN-04",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BURN-04-V06",
      "base_id": "BURN-04",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BURN-04-V07",
      "base_id": "BURN-04",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BURN-04-V08",
      "base_id": "BURN-04",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BURN-04-V09",
      "base_id": "BURN-04",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BURN-04-V10",
      "base_id": "BURN-04",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BURN-05-V01",
      "base_id": "BURN-05",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BURN-05-V02",
      "base_id": "BURN-05",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BURN-05-V03",
      "base_id": "BURN-05",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BURN-05-V04",
      "base_id": "BURN-05",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BURN-05-V05",
      "base_id": "BURN-05",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BURN-05-V06",
      "base_id": "BURN-05",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BURN-05-V07",
      "base_id": "BURN-05",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BURN-05-V08",
      "base_id": "BURN-05",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BURN-05-V09",
      "base_id": "BURN-05",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BURN-05-V10",
      "base_id": "BURN-05",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BURN-06-V01",
      "base_id": "BURN-06",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BURN-06-V02",
      "base_id": "BURN-06",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BURN-06-V03",
      "base_id": "BURN-06",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BURN-06-V04",
      "base_id": "BURN-06",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BURN-06-V05",
      "base_id": "BURN-06",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BURN-06-V06",
      "base_id": "BURN-06",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BURN-06-V07",
      "base_id": "BURN-06",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BURN-06-V08",
      "base_id": "BURN-06",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BURN-06-V09",
      "base_id": "BURN-06",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BURN-06-V10",
      "base_id": "BURN-06",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-01-V01",
      "base_id": "POISON-01",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-01-V02",
      "base_id": "POISON-01",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-01-V03",
      "base_id": "POISON-01",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-01-V04",
      "base_id": "POISON-01",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-01-V05",
      "base_id": "POISON-01",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-01-V06",
      "base_id": "POISON-01",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-01-V07",
      "base_id": "POISON-01",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-01-V08",
      "base_id": "POISON-01",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-01-V09",
      "base_id": "POISON-01",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-01-V10",
      "base_id": "POISON-01",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-02-V01",
      "base_id": "POISON-02",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-02-V02",
      "base_id": "POISON-02",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-02-V03",
      "base_id": "POISON-02",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-02-V04",
      "base_id": "POISON-02",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-02-V05",
      "base_id": "POISON-02",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-02-V06",
      "base_id": "POISON-02",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-02-V07",
      "base_id": "POISON-02",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-02-V08",
      "base_id": "POISON-02",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-02-V09",
      "base_id": "POISON-02",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-02-V10",
      "base_id": "POISON-02",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-03-V01",
      "base_id": "POISON-03",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-03-V02",
      "base_id": "POISON-03",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-03-V03",
      "base_id": "POISON-03",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-03-V04",
      "base_id": "POISON-03",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-03-V05",
      "base_id": "POISON-03",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-03-V06",
      "base_id": "POISON-03",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-03-V07",
      "base_id": "POISON-03",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-03-V08",
      "base_id": "POISON-03",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-03-V09",
      "base_id": "POISON-03",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-03-V10",
      "base_id": "POISON-03",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-04-V01",
      "base_id": "POISON-04",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-04-V02",
      "base_id": "POISON-04",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-04-V03",
      "base_id": "POISON-04",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-04-V04",
      "base_id": "POISON-04",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-04-V05",
      "base_id": "POISON-04",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-04-V06",
      "base_id": "POISON-04",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-04-V07",
      "base_id": "POISON-04",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-04-V08",
      "base_id": "POISON-04",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-04-V09",
      "base_id": "POISON-04",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-04-V10",
      "base_id": "POISON-04",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-05-V01",
      "base_id": "POISON-05",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-05-V02",
      "base_id": "POISON-05",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-05-V03",
      "base_id": "POISON-05",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-05-V04",
      "base_id": "POISON-05",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-05-V05",
      "base_id": "POISON-05",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-05-V06",
      "base_id": "POISON-05",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-05-V07",
      "base_id": "POISON-05",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-05-V08",
      "base_id": "POISON-05",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-05-V09",
      "base_id": "POISON-05",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-05-V10",
      "base_id": "POISON-05",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-06-V01",
      "base_id": "POISON-06",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-06-V02",
      "base_id": "POISON-06",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-06-V03",
      "base_id": "POISON-06",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-06-V04",
      "base_id": "POISON-06",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-06-V05",
      "base_id": "POISON-06",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-06-V06",
      "base_id": "POISON-06",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-06-V07",
      "base_id": "POISON-06",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-06-V08",
      "base_id": "POISON-06",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-06-V09",
      "base_id": "POISON-06",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-06-V10",
      "base_id": "POISON-06",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-07-V01",
      "base_id": "POISON-07",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-07-V02",
      "base_id": "POISON-07",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-07-V03",
      "base_id": "POISON-07",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-07-V04",
      "base_id": "POISON-07",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-07-V05",
      "base_id": "POISON-07",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-07-V06",
      "base_id": "POISON-07",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-07-V07",
      "base_id": "POISON-07",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-07-V08",
      "base_id": "POISON-07",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-07-V09",
      "base_id": "POISON-07",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-07-V10",
      "base_id": "POISON-07",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-08-V01",
      "base_id": "POISON-08",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-08-V02",
      "base_id": "POISON-08",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-08-V03",
      "base_id": "POISON-08",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-08-V04",
      "base_id": "POISON-08",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-08-V05",
      "base_id": "POISON-08",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-08-V06",
      "base_id": "POISON-08",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-08-V07",
      "base_id": "POISON-08",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-08-V08",
      "base_id": "POISON-08",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-08-V09",
      "base_id": "POISON-08",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-08-V10",
      "base_id": "POISON-08",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-09-V01",
      "base_id": "POISON-09",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-09-V02",
      "base_id": "POISON-09",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-09-V03",
      "base_id": "POISON-09",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-09-V04",
      "base_id": "POISON-09",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-09-V05",
      "base_id": "POISON-09",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-09-V06",
      "base_id": "POISON-09",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-09-V07",
      "base_id": "POISON-09",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-09-V08",
      "base_id": "POISON-09",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-09-V09",
      "base_id": "POISON-09",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "POISON-09-V10",
      "base_id": "POISON-09",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ALLERGY-01-V01",
      "base_id": "ALLERGY-01",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ALLERGY-01-V02",
      "base_id": "ALLERGY-01",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ALLERGY-01-V03",
      "base_id": "ALLERGY-01",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ALLERGY-01-V04",
      "base_id": "ALLERGY-01",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ALLERGY-01-V05",
      "base_id": "ALLERGY-01",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ALLERGY-01-V06",
      "base_id": "ALLERGY-01",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ALLERGY-01-V07",
      "base_id": "ALLERGY-01",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ALLERGY-01-V08",
      "base_id": "ALLERGY-01",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ALLERGY-01-V09",
      "base_id": "ALLERGY-01",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ALLERGY-01-V10",
      "base_id": "ALLERGY-01",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ALLERGY-02-V01",
      "base_id": "ALLERGY-02",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ALLERGY-02-V02",
      "base_id": "ALLERGY-02",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ALLERGY-02-V03",
      "base_id": "ALLERGY-02",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ALLERGY-02-V04",
      "base_id": "ALLERGY-02",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ALLERGY-02-V05",
      "base_id": "ALLERGY-02",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ALLERGY-02-V06",
      "base_id": "ALLERGY-02",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ALLERGY-02-V07",
      "base_id": "ALLERGY-02",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ALLERGY-02-V08",
      "base_id": "ALLERGY-02",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ALLERGY-02-V09",
      "base_id": "ALLERGY-02",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ALLERGY-02-V10",
      "base_id": "ALLERGY-02",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ALLERGY-03-V01",
      "base_id": "ALLERGY-03",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ALLERGY-03-V02",
      "base_id": "ALLERGY-03",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ALLERGY-03-V03",
      "base_id": "ALLERGY-03",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ALLERGY-03-V04",
      "base_id": "ALLERGY-03",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ALLERGY-03-V05",
      "base_id": "ALLERGY-03",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ALLERGY-03-V06",
      "base_id": "ALLERGY-03",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ALLERGY-03-V07",
      "base_id": "ALLERGY-03",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ALLERGY-03-V08",
      "base_id": "ALLERGY-03",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ALLERGY-03-V09",
      "base_id": "ALLERGY-03",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ALLERGY-03-V10",
      "base_id": "ALLERGY-03",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ALLERGY-04-V01",
      "base_id": "ALLERGY-04",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ALLERGY-04-V02",
      "base_id": "ALLERGY-04",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ALLERGY-04-V03",
      "base_id": "ALLERGY-04",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ALLERGY-04-V04",
      "base_id": "ALLERGY-04",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ALLERGY-04-V05",
      "base_id": "ALLERGY-04",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ALLERGY-04-V06",
      "base_id": "ALLERGY-04",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ALLERGY-04-V07",
      "base_id": "ALLERGY-04",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ALLERGY-04-V08",
      "base_id": "ALLERGY-04",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ALLERGY-04-V09",
      "base_id": "ALLERGY-04",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ALLERGY-04-V10",
      "base_id": "ALLERGY-04",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ALLERGY-05-V01",
      "base_id": "ALLERGY-05",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ALLERGY-05-V02",
      "base_id": "ALLERGY-05",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ALLERGY-05-V03",
      "base_id": "ALLERGY-05",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ALLERGY-05-V04",
      "base_id": "ALLERGY-05",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ALLERGY-05-V05",
      "base_id": "ALLERGY-05",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ALLERGY-05-V06",
      "base_id": "ALLERGY-05",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ALLERGY-05-V07",
      "base_id": "ALLERGY-05",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ALLERGY-05-V08",
      "base_id": "ALLERGY-05",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ALLERGY-05-V09",
      "base_id": "ALLERGY-05",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ALLERGY-05-V10",
      "base_id": "ALLERGY-05",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-01-V01",
      "base_id": "BITE-01",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-01-V02",
      "base_id": "BITE-01",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-01-V03",
      "base_id": "BITE-01",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-01-V04",
      "base_id": "BITE-01",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-01-V05",
      "base_id": "BITE-01",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-01-V06",
      "base_id": "BITE-01",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-01-V07",
      "base_id": "BITE-01",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-01-V08",
      "base_id": "BITE-01",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-01-V09",
      "base_id": "BITE-01",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-01-V10",
      "base_id": "BITE-01",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-02-V01",
      "base_id": "BITE-02",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-02-V02",
      "base_id": "BITE-02",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-02-V03",
      "base_id": "BITE-02",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-02-V04",
      "base_id": "BITE-02",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-02-V05",
      "base_id": "BITE-02",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-02-V06",
      "base_id": "BITE-02",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-02-V07",
      "base_id": "BITE-02",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-02-V08",
      "base_id": "BITE-02",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-02-V09",
      "base_id": "BITE-02",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-02-V10",
      "base_id": "BITE-02",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-03-V01",
      "base_id": "BITE-03",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-03-V02",
      "base_id": "BITE-03",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-03-V03",
      "base_id": "BITE-03",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-03-V04",
      "base_id": "BITE-03",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-03-V05",
      "base_id": "BITE-03",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-03-V06",
      "base_id": "BITE-03",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-03-V07",
      "base_id": "BITE-03",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-03-V08",
      "base_id": "BITE-03",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-03-V09",
      "base_id": "BITE-03",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-03-V10",
      "base_id": "BITE-03",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-04-V01",
      "base_id": "BITE-04",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-04-V02",
      "base_id": "BITE-04",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-04-V03",
      "base_id": "BITE-04",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-04-V04",
      "base_id": "BITE-04",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-04-V05",
      "base_id": "BITE-04",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-04-V06",
      "base_id": "BITE-04",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-04-V07",
      "base_id": "BITE-04",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-04-V08",
      "base_id": "BITE-04",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-04-V09",
      "base_id": "BITE-04",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-04-V10",
      "base_id": "BITE-04",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-05-V01",
      "base_id": "BITE-05",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-05-V02",
      "base_id": "BITE-05",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-05-V03",
      "base_id": "BITE-05",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-05-V04",
      "base_id": "BITE-05",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-05-V05",
      "base_id": "BITE-05",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-05-V06",
      "base_id": "BITE-05",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-05-V07",
      "base_id": "BITE-05",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-05-V08",
      "base_id": "BITE-05",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-05-V09",
      "base_id": "BITE-05",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-05-V10",
      "base_id": "BITE-05",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-06-V01",
      "base_id": "BITE-06",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-06-V02",
      "base_id": "BITE-06",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-06-V03",
      "base_id": "BITE-06",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-06-V04",
      "base_id": "BITE-06",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-06-V05",
      "base_id": "BITE-06",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-06-V06",
      "base_id": "BITE-06",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-06-V07",
      "base_id": "BITE-06",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-06-V08",
      "base_id": "BITE-06",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-06-V09",
      "base_id": "BITE-06",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-06-V10",
      "base_id": "BITE-06",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-07-V01",
      "base_id": "BITE-07",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-07-V02",
      "base_id": "BITE-07",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-07-V03",
      "base_id": "BITE-07",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-07-V04",
      "base_id": "BITE-07",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-07-V05",
      "base_id": "BITE-07",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-07-V06",
      "base_id": "BITE-07",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-07-V07",
      "base_id": "BITE-07",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-07-V08",
      "base_id": "BITE-07",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-07-V09",
      "base_id": "BITE-07",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "BITE-07-V10",
      "base_id": "BITE-07",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "WATER-01-V01",
      "base_id": "WATER-01",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "WATER-01-V02",
      "base_id": "WATER-01",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "WATER-01-V03",
      "base_id": "WATER-01",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "WATER-01-V04",
      "base_id": "WATER-01",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "WATER-01-V05",
      "base_id": "WATER-01",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "WATER-01-V06",
      "base_id": "WATER-01",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "WATER-01-V07",
      "base_id": "WATER-01",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "WATER-01-V08",
      "base_id": "WATER-01",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "WATER-01-V09",
      "base_id": "WATER-01",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "WATER-01-V10",
      "base_id": "WATER-01",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "WATER-02-V01",
      "base_id": "WATER-02",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "WATER-02-V02",
      "base_id": "WATER-02",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "WATER-02-V03",
      "base_id": "WATER-02",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "WATER-02-V04",
      "base_id": "WATER-02",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "WATER-02-V05",
      "base_id": "WATER-02",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "WATER-02-V06",
      "base_id": "WATER-02",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "WATER-02-V07",
      "base_id": "WATER-02",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "WATER-02-V08",
      "base_id": "WATER-02",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "WATER-02-V09",
      "base_id": "WATER-02",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "WATER-02-V10",
      "base_id": "WATER-02",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "WATER-03-V01",
      "base_id": "WATER-03",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "WATER-03-V02",
      "base_id": "WATER-03",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "WATER-03-V03",
      "base_id": "WATER-03",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "WATER-03-V04",
      "base_id": "WATER-03",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "WATER-03-V05",
      "base_id": "WATER-03",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "WATER-03-V06",
      "base_id": "WATER-03",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "WATER-03-V07",
      "base_id": "WATER-03",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "WATER-03-V08",
      "base_id": "WATER-03",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "WATER-03-V09",
      "base_id": "WATER-03",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "WATER-03-V10",
      "base_id": "WATER-03",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TEMP-01-V01",
      "base_id": "TEMP-01",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TEMP-01-V02",
      "base_id": "TEMP-01",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TEMP-01-V03",
      "base_id": "TEMP-01",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TEMP-01-V04",
      "base_id": "TEMP-01",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TEMP-01-V05",
      "base_id": "TEMP-01",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TEMP-01-V06",
      "base_id": "TEMP-01",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TEMP-01-V07",
      "base_id": "TEMP-01",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TEMP-01-V08",
      "base_id": "TEMP-01",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TEMP-01-V09",
      "base_id": "TEMP-01",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TEMP-01-V10",
      "base_id": "TEMP-01",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TEMP-02-V01",
      "base_id": "TEMP-02",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TEMP-02-V02",
      "base_id": "TEMP-02",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TEMP-02-V03",
      "base_id": "TEMP-02",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TEMP-02-V04",
      "base_id": "TEMP-02",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TEMP-02-V05",
      "base_id": "TEMP-02",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TEMP-02-V06",
      "base_id": "TEMP-02",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TEMP-02-V07",
      "base_id": "TEMP-02",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TEMP-02-V08",
      "base_id": "TEMP-02",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TEMP-02-V09",
      "base_id": "TEMP-02",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TEMP-02-V10",
      "base_id": "TEMP-02",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TEMP-03-V01",
      "base_id": "TEMP-03",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TEMP-03-V02",
      "base_id": "TEMP-03",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TEMP-03-V03",
      "base_id": "TEMP-03",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TEMP-03-V04",
      "base_id": "TEMP-03",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TEMP-03-V05",
      "base_id": "TEMP-03",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TEMP-03-V06",
      "base_id": "TEMP-03",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TEMP-03-V07",
      "base_id": "TEMP-03",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TEMP-03-V08",
      "base_id": "TEMP-03",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TEMP-03-V09",
      "base_id": "TEMP-03",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TEMP-03-V10",
      "base_id": "TEMP-03",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TEMP-04-V01",
      "base_id": "TEMP-04",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TEMP-04-V02",
      "base_id": "TEMP-04",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TEMP-04-V03",
      "base_id": "TEMP-04",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TEMP-04-V04",
      "base_id": "TEMP-04",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TEMP-04-V05",
      "base_id": "TEMP-04",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TEMP-04-V06",
      "base_id": "TEMP-04",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TEMP-04-V07",
      "base_id": "TEMP-04",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TEMP-04-V08",
      "base_id": "TEMP-04",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TEMP-04-V09",
      "base_id": "TEMP-04",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TEMP-04-V10",
      "base_id": "TEMP-04",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TEMP-05-V01",
      "base_id": "TEMP-05",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TEMP-05-V02",
      "base_id": "TEMP-05",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TEMP-05-V03",
      "base_id": "TEMP-05",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TEMP-05-V04",
      "base_id": "TEMP-05",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TEMP-05-V05",
      "base_id": "TEMP-05",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TEMP-05-V06",
      "base_id": "TEMP-05",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TEMP-05-V07",
      "base_id": "TEMP-05",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TEMP-05-V08",
      "base_id": "TEMP-05",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TEMP-05-V09",
      "base_id": "TEMP-05",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "TEMP-05-V10",
      "base_id": "TEMP-05",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-01-V01",
      "base_id": "PED-01",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-01-V02",
      "base_id": "PED-01",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-01-V03",
      "base_id": "PED-01",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-01-V04",
      "base_id": "PED-01",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-01-V05",
      "base_id": "PED-01",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-01-V06",
      "base_id": "PED-01",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-01-V07",
      "base_id": "PED-01",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-01-V08",
      "base_id": "PED-01",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-01-V09",
      "base_id": "PED-01",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-01-V10",
      "base_id": "PED-01",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-02-V01",
      "base_id": "PED-02",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-02-V02",
      "base_id": "PED-02",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-02-V03",
      "base_id": "PED-02",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-02-V04",
      "base_id": "PED-02",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-02-V05",
      "base_id": "PED-02",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-02-V06",
      "base_id": "PED-02",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-02-V07",
      "base_id": "PED-02",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-02-V08",
      "base_id": "PED-02",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-02-V09",
      "base_id": "PED-02",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-02-V10",
      "base_id": "PED-02",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-03-V01",
      "base_id": "PED-03",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-03-V02",
      "base_id": "PED-03",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-03-V03",
      "base_id": "PED-03",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-03-V04",
      "base_id": "PED-03",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-03-V05",
      "base_id": "PED-03",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-03-V06",
      "base_id": "PED-03",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-03-V07",
      "base_id": "PED-03",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-03-V08",
      "base_id": "PED-03",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-03-V09",
      "base_id": "PED-03",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-03-V10",
      "base_id": "PED-03",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-04-V01",
      "base_id": "PED-04",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-04-V02",
      "base_id": "PED-04",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-04-V03",
      "base_id": "PED-04",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-04-V04",
      "base_id": "PED-04",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-04-V05",
      "base_id": "PED-04",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-04-V06",
      "base_id": "PED-04",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-04-V07",
      "base_id": "PED-04",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-04-V08",
      "base_id": "PED-04",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-04-V09",
      "base_id": "PED-04",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-04-V10",
      "base_id": "PED-04",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-05-V01",
      "base_id": "PED-05",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-05-V02",
      "base_id": "PED-05",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-05-V03",
      "base_id": "PED-05",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-05-V04",
      "base_id": "PED-05",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-05-V05",
      "base_id": "PED-05",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-05-V06",
      "base_id": "PED-05",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-05-V07",
      "base_id": "PED-05",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-05-V08",
      "base_id": "PED-05",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-05-V09",
      "base_id": "PED-05",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-05-V10",
      "base_id": "PED-05",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-06-V01",
      "base_id": "PED-06",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-06-V02",
      "base_id": "PED-06",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-06-V03",
      "base_id": "PED-06",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-06-V04",
      "base_id": "PED-06",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-06-V05",
      "base_id": "PED-06",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-06-V06",
      "base_id": "PED-06",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-06-V07",
      "base_id": "PED-06",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-06-V08",
      "base_id": "PED-06",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-06-V09",
      "base_id": "PED-06",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-06-V10",
      "base_id": "PED-06",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-07-V01",
      "base_id": "PED-07",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-07-V02",
      "base_id": "PED-07",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-07-V03",
      "base_id": "PED-07",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-07-V04",
      "base_id": "PED-07",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-07-V05",
      "base_id": "PED-07",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-07-V06",
      "base_id": "PED-07",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-07-V07",
      "base_id": "PED-07",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-07-V08",
      "base_id": "PED-07",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-07-V09",
      "base_id": "PED-07",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-07-V10",
      "base_id": "PED-07",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-08-V01",
      "base_id": "PED-08",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-08-V02",
      "base_id": "PED-08",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-08-V03",
      "base_id": "PED-08",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-08-V04",
      "base_id": "PED-08",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-08-V05",
      "base_id": "PED-08",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-08-V06",
      "base_id": "PED-08",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-08-V07",
      "base_id": "PED-08",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-08-V08",
      "base_id": "PED-08",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-08-V09",
      "base_id": "PED-08",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PED-08-V10",
      "base_id": "PED-08",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PREG-01-V01",
      "base_id": "PREG-01",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PREG-01-V02",
      "base_id": "PREG-01",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PREG-01-V03",
      "base_id": "PREG-01",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PREG-01-V04",
      "base_id": "PREG-01",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PREG-01-V05",
      "base_id": "PREG-01",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PREG-01-V06",
      "base_id": "PREG-01",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PREG-01-V07",
      "base_id": "PREG-01",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PREG-01-V08",
      "base_id": "PREG-01",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PREG-01-V09",
      "base_id": "PREG-01",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PREG-01-V10",
      "base_id": "PREG-01",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PREG-02-V01",
      "base_id": "PREG-02",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PREG-02-V02",
      "base_id": "PREG-02",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PREG-02-V03",
      "base_id": "PREG-02",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PREG-02-V04",
      "base_id": "PREG-02",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PREG-02-V05",
      "base_id": "PREG-02",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PREG-02-V06",
      "base_id": "PREG-02",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PREG-02-V07",
      "base_id": "PREG-02",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PREG-02-V08",
      "base_id": "PREG-02",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PREG-02-V09",
      "base_id": "PREG-02",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PREG-02-V10",
      "base_id": "PREG-02",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PREG-03-V01",
      "base_id": "PREG-03",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PREG-03-V02",
      "base_id": "PREG-03",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PREG-03-V03",
      "base_id": "PREG-03",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PREG-03-V04",
      "base_id": "PREG-03",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PREG-03-V05",
      "base_id": "PREG-03",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PREG-03-V06",
      "base_id": "PREG-03",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PREG-03-V07",
      "base_id": "PREG-03",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PREG-03-V08",
      "base_id": "PREG-03",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PREG-03-V09",
      "base_id": "PREG-03",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PREG-03-V10",
      "base_id": "PREG-03",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PREG-04-V01",
      "base_id": "PREG-04",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PREG-04-V02",
      "base_id": "PREG-04",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PREG-04-V03",
      "base_id": "PREG-04",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PREG-04-V04",
      "base_id": "PREG-04",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PREG-04-V05",
      "base_id": "PREG-04",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PREG-04-V06",
      "base_id": "PREG-04",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PREG-04-V07",
      "base_id": "PREG-04",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PREG-04-V08",
      "base_id": "PREG-04",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PREG-04-V09",
      "base_id": "PREG-04",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PREG-04-V10",
      "base_id": "PREG-04",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PREG-05-V01",
      "base_id": "PREG-05",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PREG-05-V02",
      "base_id": "PREG-05",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PREG-05-V03",
      "base_id": "PREG-05",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PREG-05-V04",
      "base_id": "PREG-05",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PREG-05-V05",
      "base_id": "PREG-05",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PREG-05-V06",
      "base_id": "PREG-05",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PREG-05-V07",
      "base_id": "PREG-05",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PREG-05-V08",
      "base_id": "PREG-05",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PREG-05-V09",
      "base_id": "PREG-05",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PREG-05-V10",
      "base_id": "PREG-05",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MET-01-V01",
      "base_id": "MET-01",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MET-01-V02",
      "base_id": "MET-01",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MET-01-V03",
      "base_id": "MET-01",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MET-01-V04",
      "base_id": "MET-01",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MET-01-V05",
      "base_id": "MET-01",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MET-01-V06",
      "base_id": "MET-01",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MET-01-V07",
      "base_id": "MET-01",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MET-01-V08",
      "base_id": "MET-01",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MET-01-V09",
      "base_id": "MET-01",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MET-01-V10",
      "base_id": "MET-01",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MET-02-V01",
      "base_id": "MET-02",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MET-02-V02",
      "base_id": "MET-02",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MET-02-V03",
      "base_id": "MET-02",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MET-02-V04",
      "base_id": "MET-02",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MET-02-V05",
      "base_id": "MET-02",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MET-02-V06",
      "base_id": "MET-02",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MET-02-V07",
      "base_id": "MET-02",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MET-02-V08",
      "base_id": "MET-02",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MET-02-V09",
      "base_id": "MET-02",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MET-02-V10",
      "base_id": "MET-02",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MET-03-V01",
      "base_id": "MET-03",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MET-03-V02",
      "base_id": "MET-03",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MET-03-V03",
      "base_id": "MET-03",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MET-03-V04",
      "base_id": "MET-03",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MET-03-V05",
      "base_id": "MET-03",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MET-03-V06",
      "base_id": "MET-03",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MET-03-V07",
      "base_id": "MET-03",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MET-03-V08",
      "base_id": "MET-03",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MET-03-V09",
      "base_id": "MET-03",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MET-03-V10",
      "base_id": "MET-03",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MET-04-V01",
      "base_id": "MET-04",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MET-04-V02",
      "base_id": "MET-04",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MET-04-V03",
      "base_id": "MET-04",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MET-04-V04",
      "base_id": "MET-04",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MET-04-V05",
      "base_id": "MET-04",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MET-04-V06",
      "base_id": "MET-04",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MET-04-V07",
      "base_id": "MET-04",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MET-04-V08",
      "base_id": "MET-04",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MET-04-V09",
      "base_id": "MET-04",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MET-04-V10",
      "base_id": "MET-04",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MET-05-V01",
      "base_id": "MET-05",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MET-05-V02",
      "base_id": "MET-05",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MET-05-V03",
      "base_id": "MET-05",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MET-05-V04",
      "base_id": "MET-05",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MET-05-V05",
      "base_id": "MET-05",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MET-05-V06",
      "base_id": "MET-05",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MET-05-V07",
      "base_id": "MET-05",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MET-05-V08",
      "base_id": "MET-05",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MET-05-V09",
      "base_id": "MET-05",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MET-05-V10",
      "base_id": "MET-05",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ENT-01-V01",
      "base_id": "ENT-01",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ENT-01-V02",
      "base_id": "ENT-01",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ENT-01-V03",
      "base_id": "ENT-01",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ENT-01-V04",
      "base_id": "ENT-01",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ENT-01-V05",
      "base_id": "ENT-01",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ENT-01-V06",
      "base_id": "ENT-01",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ENT-01-V07",
      "base_id": "ENT-01",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ENT-01-V08",
      "base_id": "ENT-01",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ENT-01-V09",
      "base_id": "ENT-01",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ENT-01-V10",
      "base_id": "ENT-01",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ENT-02-V01",
      "base_id": "ENT-02",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ENT-02-V02",
      "base_id": "ENT-02",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ENT-02-V03",
      "base_id": "ENT-02",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ENT-02-V04",
      "base_id": "ENT-02",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ENT-02-V05",
      "base_id": "ENT-02",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ENT-02-V06",
      "base_id": "ENT-02",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ENT-02-V07",
      "base_id": "ENT-02",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ENT-02-V08",
      "base_id": "ENT-02",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ENT-02-V09",
      "base_id": "ENT-02",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ENT-02-V10",
      "base_id": "ENT-02",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ENT-03-V01",
      "base_id": "ENT-03",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ENT-03-V02",
      "base_id": "ENT-03",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ENT-03-V03",
      "base_id": "ENT-03",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ENT-03-V04",
      "base_id": "ENT-03",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ENT-03-V05",
      "base_id": "ENT-03",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ENT-03-V06",
      "base_id": "ENT-03",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ENT-03-V07",
      "base_id": "ENT-03",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ENT-03-V08",
      "base_id": "ENT-03",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ENT-03-V09",
      "base_id": "ENT-03",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ENT-03-V10",
      "base_id": "ENT-03",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ENT-04-V01",
      "base_id": "ENT-04",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ENT-04-V02",
      "base_id": "ENT-04",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ENT-04-V03",
      "base_id": "ENT-04",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ENT-04-V04",
      "base_id": "ENT-04",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ENT-04-V05",
      "base_id": "ENT-04",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ENT-04-V06",
      "base_id": "ENT-04",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ENT-04-V07",
      "base_id": "ENT-04",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ENT-04-V08",
      "base_id": "ENT-04",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ENT-04-V09",
      "base_id": "ENT-04",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ENT-04-V10",
      "base_id": "ENT-04",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ENT-05-V01",
      "base_id": "ENT-05",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ENT-05-V02",
      "base_id": "ENT-05",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ENT-05-V03",
      "base_id": "ENT-05",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ENT-05-V04",
      "base_id": "ENT-05",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ENT-05-V05",
      "base_id": "ENT-05",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ENT-05-V06",
      "base_id": "ENT-05",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ENT-05-V07",
      "base_id": "ENT-05",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ENT-05-V08",
      "base_id": "ENT-05",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ENT-05-V09",
      "base_id": "ENT-05",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "ENT-05-V10",
      "base_id": "ENT-05",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PSY-01-V01",
      "base_id": "PSY-01",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PSY-01-V02",
      "base_id": "PSY-01",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PSY-01-V03",
      "base_id": "PSY-01",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PSY-01-V04",
      "base_id": "PSY-01",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PSY-01-V05",
      "base_id": "PSY-01",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PSY-01-V06",
      "base_id": "PSY-01",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PSY-01-V07",
      "base_id": "PSY-01",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PSY-01-V08",
      "base_id": "PSY-01",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PSY-01-V09",
      "base_id": "PSY-01",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PSY-01-V10",
      "base_id": "PSY-01",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PSY-02-V01",
      "base_id": "PSY-02",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PSY-02-V02",
      "base_id": "PSY-02",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PSY-02-V03",
      "base_id": "PSY-02",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PSY-02-V04",
      "base_id": "PSY-02",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PSY-02-V05",
      "base_id": "PSY-02",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PSY-02-V06",
      "base_id": "PSY-02",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PSY-02-V07",
      "base_id": "PSY-02",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PSY-02-V08",
      "base_id": "PSY-02",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PSY-02-V09",
      "base_id": "PSY-02",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PSY-02-V10",
      "base_id": "PSY-02",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PSY-03-V01",
      "base_id": "PSY-03",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PSY-03-V02",
      "base_id": "PSY-03",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PSY-03-V03",
      "base_id": "PSY-03",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PSY-03-V04",
      "base_id": "PSY-03",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PSY-03-V05",
      "base_id": "PSY-03",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PSY-03-V06",
      "base_id": "PSY-03",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PSY-03-V07",
      "base_id": "PSY-03",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PSY-03-V08",
      "base_id": "PSY-03",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PSY-03-V09",
      "base_id": "PSY-03",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PSY-03-V10",
      "base_id": "PSY-03",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PSY-04-V01",
      "base_id": "PSY-04",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PSY-04-V02",
      "base_id": "PSY-04",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PSY-04-V03",
      "base_id": "PSY-04",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PSY-04-V04",
      "base_id": "PSY-04",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PSY-04-V05",
      "base_id": "PSY-04",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PSY-04-V06",
      "base_id": "PSY-04",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PSY-04-V07",
      "base_id": "PSY-04",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PSY-04-V08",
      "base_id": "PSY-04",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PSY-04-V09",
      "base_id": "PSY-04",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "PSY-04-V10",
      "base_id": "PSY-04",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MULTI-01-V01",
      "base_id": "MULTI-01",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MULTI-01-V02",
      "base_id": "MULTI-01",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MULTI-01-V03",
      "base_id": "MULTI-01",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MULTI-01-V04",
      "base_id": "MULTI-01",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MULTI-01-V05",
      "base_id": "MULTI-01",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MULTI-01-V06",
      "base_id": "MULTI-01",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MULTI-01-V07",
      "base_id": "MULTI-01",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MULTI-01-V08",
      "base_id": "MULTI-01",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MULTI-01-V09",
      "base_id": "MULTI-01",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MULTI-01-V10",
      "base_id": "MULTI-01",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MULTI-02-V01",
      "base_id": "MULTI-02",
      "context_vi": "Một người hỗ trợ, điều kiện bình thường",
      "expected_system_behavior_vi": "Luồng cơ sở; không bắt buộc điền tiền sử trước sàng lọc nguy hiểm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MULTI-02-V02",
      "base_id": "MULTI-02",
      "context_vi": "Có nhiều người hỗ trợ",
      "expected_system_behavior_vi": "Kiểm tra phân công gọi cấp cứu và lấy thiết bị nếu phù hợp; tránh trùng lặp thao tác.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MULTI-02-V03",
      "base_id": "MULTI-02",
      "context_vi": "Không có mạng Internet",
      "expected_system_behavior_vi": "Luồng ngoại tuyến chỉ dùng nội dung đã được phê duyệt; vẫn hiện chức năng gọi cấp cứu.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MULTI-02-V04",
      "base_id": "MULTI-02",
      "context_vi": "Không biết tiền sử hoặc thuốc đang dùng",
      "expected_system_behavior_vi": "Cho phép không rõ; không suy diễn bệnh nền.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MULTI-02-V05",
      "base_id": "MULTI-02",
      "context_vi": "Không xác định được thời điểm khởi phát",
      "expected_system_behavior_vi": "Ghi không rõ; không tạo thời điểm giả, không trì hoãn đánh giá.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MULTI-02-V06",
      "base_id": "MULTI-02",
      "context_vi": "Người hỗ trợ không hiểu thuật ngữ y khoa",
      "expected_system_behavior_vi": "Câu hỏi ngắn, mô tả dấu hiệu quan sát được; có thể đọc lại.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MULTI-02-V07",
      "base_id": "MULTI-02",
      "context_vi": "Không thể sử dụng âm thanh hoặc nhận dạng giọng nói",
      "expected_system_behavior_vi": "Mọi bước phải có phương án nhập/chọn bằng tay.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MULTI-02-V08",
      "base_id": "MULTI-02",
      "context_vi": "Ứng dụng bị gián đoạn giữa phiên",
      "expected_system_behavior_vi": "Khôi phục trạng thái, ghi thời gian thực; không tự xác nhận bước chưa làm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MULTI-02-V09",
      "base_id": "MULTI-02",
      "context_vi": "Tình trạng nạn nhân xấu đi, xuất hiện dấu hiệu nguy hiểm mới",
      "expected_system_behavior_vi": "Ngắt luồng hiện tại để đánh giá lại ngay; không chờ hết bộ đếm.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    },
    {
      "id": "MULTI-02-V10",
      "base_id": "MULTI-02",
      "context_vi": "Người hỗ trợ không chắc câu trả lời về một dấu hiệu quan trọng",
      "expected_system_behavior_vi": "Không biến không rõ thành không có; chuyển nhánh đánh giá an toàn và hỗ trợ cấp cứu khi cần.",
      "clinical_expected_action": null,
      "status": "DRAFT_QA_ONLY"
    }
  ]
};
