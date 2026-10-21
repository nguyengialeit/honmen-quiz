// Honmen Saitama quiz data. Each simple entry: [question, answer(1=Dung,0=Sai), note, img?]
const DE1_RAW = [
 [
  "Cả 2 tín hiệu tay của cảnh sát đều giống với đèn tín hiệu màu đỏ.",
  1,
  "",
  "imgs/D1-1.png"
 ],
 [
  "Biển báo và chỉ dẫn này (cấm quay đầu) có ý nghĩa giống nhau.",
  1,
  "",
  "imgs/D1-2.png"
 ],
 [
  "Khi định rẽ trái thì phải đi sát lề trái của đường nếu có thể và đi với tốc độ chậm.",
  1
 ],
 [
  "Tại đường có biển chỉ dẫn này (cấm vượt phải, có mũi tên) thì không thể quay đầu.",
  0,
  "Chỉ cấm băng qua",
  "imgs/D1-4.png"
 ],
 [
  "Trong vòng 30m tính từ điểm dừng xe buýt thì không được vượt.",
  0
 ],
 [
  "Khi có chướng ngại vật trên đường phía trước, hãy tăng tốc đi để đi qua khu vực đó trước phương tiện chạy ngược chiều.",
  0
 ],
 [
  "Khi chuẩn bị rẽ trái tại ngã tư phía trước, trước tiên hãy di chuyển vào phần giữa đường, sau đó chạy chậm lại đồng thời rẽ trái. (Ngoại trừ nút giao thông vòng xuyến.)",
  0
 ],
 [
  "Xe B, đang chạy vào trong ngã tư như hình vẽ, không được cản trở việc lưu thông A đang chạy vào ngã tư từ phía trái.",
  0,
  "Phải nhường xe trên đường ưu tiên, nếu 2 đường không ưu tiên thì phải nhường xe phía bên tay trái",
  "imgs/D1-8.png"
 ],
 [
  "Mặc dù ngã tư phía trước bị tắc nghẽn, nhưng vì đèn của hướng đi thẳng hiển thị màu xanh, nên bạn vẫn tiến vào ngã tư và dừng lại.",
  0,
  "Nếu phía trước bị tắc, dù đèn xanh cũng không được đi"
 ],
 [
  "Khi lưu thông tại các ngã tư có bảng chỉ dẫn này (STOP) mà không có vạch dừng thì phải dừng trước ngã tư.",
  1,
  "",
  "imgs/D1-10.png"
 ],
 [
  "Vì biển chỉ dẫn này được bố trí ở phía trước các đồn cảnh sát hay trạm cứu hỏa, nên trường hợp nếu không có điều động khẩn cấp xe cứu hỏa, v.v., thì có thể đi vào và dừng lại trong khu vực này.",
  0,
  "",
  "imgs/D1-11.png"
 ],
 [
  "Cho dù dừng xe liên tục trong thời gian dài, nhưng nếu người điều khiển vẫn ở trên xe và trong trạng thái có thể điều khiển xe ngay lập tức thì đó không phải là đỗ xe.",
  0,
  "Trên 5 phút là đỗ xe"
 ],
 [
  "Phía bên phải của xe không đủ rộng 3,5 m trở lên, nhưng vì không có xe nào khác lưu thông nên đã đỗ xe.",
  0
 ],
 [
  "Trước khi khởi động xe ô tô tự động, sau khi xác nhận cần số ở vị trí D thì đạp phanh và khởi động động cơ.",
  0,
  "Cần xác nhận kéo phanh tay + cần số ở P"
 ],
 [
  "Khi đến gần thanh ngang chắn tàu, còi báo động vang lên nhưng do rào chắn đường sắt mới hạ xuống hay chưa hạ xuống hết, nên vẫn đi qua.",
  0
 ],
 [
  "Tại các đoạn xuống dốc dài, nên thường xuyên sử dụng phanh chân và giảm tốc độ.",
  0
 ],
 [
  "Việc cần giảm tốc độ thích hợp trước khi vào góc rẽ hay khúc cua là vì xe dễ bị đổ ngang hoặc trượt ngang nếu xoay vô lăng ở tốc độ cao, hoặc nhấn phanh trong khi đang rẽ ở giữa khúc cua.",
  1
 ],
 [
  "Do tai nạn xảy ra nhiều vào lúc chập choạng tối, nên cần nhanh chóng bật đèn và báo hiệu sự hiện diện của xe mình.",
  1
 ],
 [
  "Khi điều khiển xe vào ban đêm, mình có thể nhìn thấy rõ người đi bộ ở khu vực phụ cận trung tâm đường nhờ đèn pha từ xe của mình và xe ô tô chạy ngược chiều.",
  0
 ],
 [
  "Khi đỗ hoặc dừng xe trên đường vào ban đêm, theo nguyên tắc, cần bật đèn báo hiệu nhấp nháy khẩn cấp, đèn đỗ xe hoặc đèn hậu để cảnh báo những xe ô tô xung quanh về sự tồn tại của xe mình.",
  1
 ],
 [
  "Khi điều khiển xe máy, xe gắn máy nên mặc quần áo nổi bật để những người điều khiển xe khác dễ nhìn thấy.",
  1
 ],
 [
  "Trường hợp xảy ra trận động đất lớn, phải sử dụng xe ô tô của mình để sơ tán trong mọi trường hợp.",
  0
 ],
 [
  "Người có giấy phép lái xe hai bánh thông thường chưa tròn 20 tuổi hoặc có giấy phép chưa tròn 3 năm thì không thể điều khiển xe hai bánh thông thường chở một người khác trên đường cao tốc.",
  1
 ],
 [
  "Khi kiểm tra xe máy, xe gắn máy, cần kiểm tra xem phần phanh lừng và độ nhạy của phanh có đủ không, các bánh xe có tiếng động lạ hoặc cong vênh hay không và áp suất lốp có phù hợp không.",
  1
 ],
 [
  "Khi xảy ra tai nạn giao thông, nhằm tránh tai nạn liên tiếp xảy ra và không gây cản trở các phương tiện giao thông khác, hãy di chuyển phương tiện vào lề đường hoặc khu vực trống rồi tắt động cơ.",
  1,
  "Có câu tương tự nhưng không được phép di chuyển phương tiện, đợi cảnh sát đến → Sai"
 ],
 [
  "Xe đạp gắn động cơ thông thường (xe gắn máy hoặc xe máy điện) phải rẽ phải giống như phương pháp của xe ôtô.",
  1,
  "",
  "imgs/D1-26.png"
 ],
 [
  "Thao tác sử dụng phanh của xe máy, xe gắn máy là nên giữ xe thẳng, vừa dùng phanh động cơ vừa đồng thời nhấn phanh của bánh trước và bánh sau.",
  1
 ],
 [
  "Khi cua trên đường cong bằng xe máy, xe gắn máy, nếu thân xe nghiêng thì dễ bị trượt xoay ngang do vậy sẽ an toàn nếu ngoặt tay lái sao cho không bị nghiêng xe.",
  0
 ],
 [
  "Khi điều khiển xe máy, xe gắn máy có hộp số tự động -xe tay ga, cần sử dụng tay ga cẩn thận để tránh bị khởi động đột ngột.",
  1
 ],
 [
  "Xe đạp gắn động cơ thông thường rẽ phải tại các nút giao thông có biển chỉ dẫn này, phải đi vào phần giữa đường trước rồi rẽ phải bằng cách cua góc hẹp.",
  0,
  "",
  "imgs/D1-30.png"
 ],
 [
  "Vì xe máy, xe gắn máy khi tắt động cơ và đẩy xe đi được coi như người đi bộ, nên có thể dắt xe hai bánh trên đường dành cho người đi bộ.",
  1,
  "Tắt động cơ xem như người đi bộ, bật động cơ (dù là dắt bộ) xem là phương tiện giao thông bình thường"
 ],
 [
  "Chủ sở hữu của phương tiện phải tham gia bảo hiểm bắt buộc, nhưng chủ sở hữu của xe đạp gắn động cơ thông thường không cần phải tham gia bảo hiểm bắt buộc.",
  0
 ],
 [
  "Khi bắt buộc phải kéo xe hỏng bằng xe ô tô thông thường thì phải giữ khoảng cách an toàn giữa xe kéo và xe hỏng đó (trong vòng tầm 5m). Đảm bảo nối bằng dây thừng chắc chắn và bắt buộc phải gắn một miếng vải đỏ tầm 30cm vuông.",
  0,
  "Vải trắng"
 ],
 [
  "Tại đường có biển báo này (cấm tất cả phương tiện) thì xe ô tô không thể lưu thông nhưng xe đạp gắn động cơ thông thường thì có thể lưu thông.",
  0,
  "",
  "imgs/D1-34.png"
 ],
 [
  "Cả hai biển chỉ dẫn này (tàu hỏa / tàu điện) có ý nghĩa là phía trước có rào chắn đường sắt.",
  1,
  "",
  "imgs/D1-35.png"
 ],
 [
  "Trường hợp xe ô tô đang chạy xe hướng ra đường hợp lưu từ phía đường như mũi tên mà đường đó có chỉ dẫn như thế này thì chỉ dẫn đó có nghĩa là đường mình đang đi là đường ưu tiên.",
  0,
  "Đường đối diện ưu tiên",
  "imgs/D1-36.png"
 ],
 [
  "Nút giao thông có biển chỉ dẫn này (mũi tên trái) mà đèn tín hiệu phía trước màu đỏ nhưng sau khi xác nhận không có người đi bộ qua đường nên tôi đã rẽ trái.",
  1,
  "Cẩn thận nhầm với biển đường 1 chiều",
  "imgs/D1-37.png"
 ],
 [
  "Xe máy, xe gắn máy và xe đạp gắn động cơ thông thường không thể lưu thông trên đường có biển báo này (cấm xe cơ giới).",
  0,
  "",
  "imgs/D1-38.png"
 ],
 [
  "Biển chỉ dẫn này (5.5t) có ý nghĩa là những xe có tải trọng hàng hoá vượt quá 5,5 tấn không được phép lưu thông.",
  0,
  "Tổng tải trọng - không phải tải trọng hàng hóa",
  "imgs/D1-39.png"
 ],
 [
  "Xe ô tô đối diện với đèn tín hiệu này (đèn đỏ + mũi tên xanh rẽ phải) thì tạm dừng trước đèn, sau khi xác nhận an toàn thì phải rẽ phải.",
  0,
  "Rẽ luôn không cần dừng",
  "imgs/D1-40.png"
 ],
 [
  "Khi lái xe không được vứt đầu lọc thuốc lá, giấy vụn, lon rỗng, v.v... ra đường.",
  1
 ],
 [
  "Trên đường có biển báo này (cấm vượt), nếu không có phương tiện chạy ngược chiều, để vượt qua các phương tiện khác có thể lấn sang phần bên phải đường.",
  0,
  "",
  "imgs/D1-42.png"
 ],
 [
  "Vì biển báo này biểu thị có trường học, trường mẫu giáo hay đường đi học ở gần đó, do có nhiều trẻ em qua lại, nên cần phải lái xe cẩn thận.",
  1,
  "",
  "imgs/D1-43.png"
 ],
 [
  "Tín hiệu giao thông bằng tay của cảnh sát viên như trong hình này có ý nghĩa tương đương với đèn đỏ đối với phần giao thông theo hướng mũi tên.",
  1,
  "",
  "imgs/D1-44.png"
 ],
 [
  "Khi lái xe ô tô thì bắt buộc phải có đầy đủ các giấy tờ kiểm định xe đang còn hiệu lực và giấy chứng nhận trách nhiệm bảo hiểm bồi thường thiệt hại xe ô tô.",
  1
 ],
 [
  "Khi đã dùng thuốc trị cảm lạnh hoặc đau đầu có tác dụng phụ là buồn ngủ thì không lái xe.",
  1
 ],
 [
  "Cho dù uống rượu vào đêm hôm trước nhưng do vẫn còn chịu ảnh hưởng của rượu nên cần chú ý khi lái xe vào sáng hôm sau.",
  1
 ],
 [
  "Trường hợp bị cảnh sát yêu cầu xuất trình bằng lái xe khi vi phạm hoặc gây ra tai nạn giao thông, không cần phải xuất trình bằng lái xe của mình.",
  0
 ],
 [
  "Người có bằng lái xe thông thường, ngoài xe ô tô thông thường, còn có thể điều khiển cả xe máy hai bánh thông thường và xe đạp gắn động cơ thông thường.",
  0,
  "Chú ý: bằng thông thường không bao gồm xe máy thông thường"
 ],
 [
  "Do khởi động đột ngột, phanh gấp và rẽ đột ngột trên đường tuyết có thể gây trượt, vì vậy cần hết sức cẩn thận khi sử dụng vô lăng và phanh.",
  1
 ],
 [
  "Vào ngày mưa, khi lưu thông cạnh người đi bộ, trường hợp làm bắn bùn lên người đi bộ, do không phòng bị nên người lái xe không phải chịu trách nhiệm.",
  0
 ],
 [
  "Khi lốp xe bị thủng trong lúc đang điều khiển xe, nên giữ chắc vô lăng, cố hết sức để điều chỉnh hướng xe ô tô, đồng thời tránh phanh gấp mà nhấn phanh nhả phanh liên tục để dừng lại.",
  1
 ],
 [
  "Khi có nguy cơ va chạm trực diện với phương tiện chạy ngược chiều, hãy cố gắng hết mức có thể giảm mức độ va chạm bằng cách sử dụng phanh và vô lăng cho đến giây phút cuối cùng.",
  1
 ],
 [
  "Xe máy hai bánh thông thường dưới 125 phân khối không thể lưu thông trên đường cao tốc.",
  1
 ],
 [
  "Làn đường chính của đường cao tốc tại các khu vực không có phân cách theo hướng hai chiều, nếu không có chỉ dẫn như các bảng chỉ dẫn thì tốc độ tối đa sẽ giống như đường thường.",
  1
 ],
 [
  "Vì đường cao tốc được trải nhựa tốt nên hàng hóa ít ngã đổ hơn so với trên đường thông thường, do đó không cần phải để ý nhiều đến cách xếp hàng hóa.",
  0
 ],
 [
  "Khi đi từ làn tăng tốc vào làn chính của đường cao tốc, để an toàn thì nên chạy chậm lại để đi vào làn chính.",
  0,
  "Phải tăng tốc - chú ý - nhập làn"
 ],
 [
  "Xe ô tô không thể đi trên tốc độ 50 km/h do kết cấu của phương tiện như xe dùng cho nông nghiệp không thể lưu thông trên đường cao tốc.",
  1
 ],
 [
  "Tại làn chính của các đường cao tốc mà không có biển báo hoặc chỉ dẫn quy định tốc độ tối đa, tốc độ tối đa của xe ô tô chở hàng cỡ lớn là 100 km/h.",
  0
 ],
 [
  "Khi bắt buộc phải đỗ xe trên đường cao tốc, bạn phải đi vào khu vực lề đường và đỗ xe về phía ngoài cùng bên trái đường.",
  1
 ],
 [
  "Cần chọn loại xe máy, xe gắn máy phù hợp với vóc dáng của bản thân sao cho khi lên xe thì hai mũi chân phải chạm đất.",
  1
 ],
 [
  "Biển chỉ dẫn phụ này (mũi tên) có ý nghĩa là \"bắt đầu\" của quy định giao thông được thể hiện trong biển chỉ dẫn chính.",
  0,
  "Kết thúc",
  "imgs/D1-62.png"
 ],
 [
  "Tốc độ lưu thông không ảnh hưởng đến khoảng cách phanh hoặc lực ly tâm.",
  0
 ],
 [
  "Với thiết bị giá chở hàng hóa cho xe đạp gắn động cơ thông thường, xe có thể chở tối đa 30kg.",
  1
 ],
 [
  "Đối với xe tắc xi với giới hạn chở người là 5 người thì có thể chở khách gồm 2 người lớn, 3 trẻ em dưới 12 tuổi.",
  1
 ],
 [
  "Trường hợp hàng hóa bị đổ và rơi vãi khi đang điều khiển xe, nếu dọn dẹp sẽ nguy hiểm nên để nguyên như thế.",
  0
 ],
 [
  "Với các vị trí được xác nhận là bất thường trong lần sử dụng trước, nếu trong lúc lái xe không bị hỏng hóc đặc biệt thì không cần kiểm tra.",
  0
 ],
 [
  "Khi chạy trên đường bị ướt do mưa, cần phải giữ khoảng cách giữa hai xe lớn hơn so với khi chạy trên đường khô ráo.",
  1
 ],
 [
  "Khi tiến vào khu vực giao thông vòng xuyến, cùng với việc chạy chậm còn không được cản trở việc lưu thông của các xe đang lưu thông trong nút giao thông vòng xuyến.",
  1
 ],
 [
  "Khi người lái xe lên hoặc xuống xe, cần kiểm tra tình hình xung quanh, đặc biệt phía sau xe.",
  1
 ],
 [
  "Khi điều khiển xe ô tô có trang bị dây an toàn, người điều khiển xe cũng như hành khách ở ghế phụ và ghế ngồi phía sau phải thắt dây an toàn.",
  1
 ],
 [
  "Trong lúc đợi đến giao thông, tay cầm điện thoại và do đèn giao thông đối diện đã chuyển thành đèn xanh cho nên tiếp tục gọi điện và lái xe. (Không tính trường hợp xe ô tô sử dụng các thiết bị lái tự động).",
  0
 ],
 [
  "Khi khởi động xe ô tô, bạn cần đưa tín hiệu bằng đèn báo hướng rẽ, đồng thời phải xác nhận phía trước, phía sau, bên trái và bên phải bằng gương chiếu hậu thêm một lần nữa để đảm bảo an toàn.",
  1
 ],
 [
  "Trên đường một chiều, bạn có thể lưu thông ở phía bên phải tính từ phần trung tâm của đường.",
  1
 ],
 [
  "Tại các đường một chiều mà có hai làn đường thì xe ô tô lưu thông tại làn đường phía bên trái.",
  1
 ],
 [
  "Khi đang lưu thông trong ngã tư, bạn phải dừng lại ngay lập tức khi xe cứu hộ khẩn cấp đến gần.",
  0
 ],
 [
  "Biển báo này (cấm mọi phương tiện) có ý nghĩa là \"Cấm mọi phương tiện\".",
  1,
  "",
  "imgs/D1-77.png"
 ],
 [
  "Tại khu vực có biển chỉ dẫn này (đường có xe lửa/tàu điện), xe ô tô không được lưu thông trong khu đường ray.",
  0,
  "",
  "imgs/D1-78.png"
 ],
 [
  "Tại dải phân cách bên đường như trong hình vẽ này, khi không có người đi bộ đi lại thì xe ô tô có thể lưu thông.",
  0,
  "",
  "imgs/D1-79.png"
 ],
 [
  "Khi người đi bộ đang băng qua trên \"vạch kẻ đường cho người đi bộ\", phải dừng lại và nhường đường cho người đi bộ ở phía trước vạch kẻ đường cho người đi bộ (ở phía trước vạch dừng nếu có vạch dừng).",
  1
 ],
 [
  "Xe đạp gắn động cơ thông thường(xe gắn máy hoặc xe máy điện) không thể lưu thông vào làn đường dành riêng cho xe buýt.",
  0
 ],
 [
  "Trường hợp xe ô tô chạy cắt qua đường đi bộ để ra hoặc vào bãi đỗ xe của siêu thị thì dù có bảo vệ của siêu thị hướng dẫn thì cũng phải tạm dừng trước vạch đường dành cho người đi bộ và không làm cản trở sự đi lại của người đi bộ.",
  1
 ],
 [
  "Khi đang lái xe ô tô mà nhìn thấy xe có gắn biểu hiệu này là biển hiệu người cao tuổi đang lái xe, trừ trường hợp bắt buộc để tránh nguy hiểm thì không được phép đi ép sát bên cạnh hay tạt đầu trước mặt xe đó.",
  1,
  "",
  "imgs/D1-83.png"
 ],
 [
  "Khi đến gần khu vực rẽ của đường, phải chạy chậm lại.",
  1
 ],
 [
  "Khi vượt xe buýt của các trường mẫu giáo đang dừng thì phải tạm dừng và xác nhận an toàn.",
  1
 ],
 [
  "Tại các đường tổng hợp không có biển chỉ dẫn hay biển báo tốc độ tối đa thì tốc độ tối đa cho các xe ô tô thông thường là 50k/m.",
  0,
  "60km/h"
 ],
 [
  "Khoảng cách dừng là khoảng cách bao gồm giữa khoảng cách xe chạy tính từ lúc lái xe cảm nhận thấy nguy hiểm, nhấn phanh cho tới khi phanh có tác dụng và khoảng cách tính từ lúc phanh có tác dụng cho tới khi xe dừng hẳn.",
  1
 ],
 [
  "Cho dù có bảng chỉ dẫn như hình vẽ này (bắt buộc bấm còi) nhưng khi đã xác nhận an toàn thì không bấm còi cũng không sao.",
  0,
  "An toàn cũng phải bấm",
  "imgs/D1-88.png"
 ],
 [
  "Khi định dừng xe ô tô, trừ trường hợp bất khả kháng, điều quan trọng là phanh vài lần để báo cho xe phía sau biết rằng bạn sắp dừng lại.",
  1
 ],
 [
  "Khi người lái xe ra tín hiệu như hình vẽ (nhìn từ phía sau), người lái xe đưa cánh tay ra khỏi xe, xuôi dài về phía sau, có nghĩa là tín hiệu đi chậm hoặc dừng xe. (Ngoại trừ nút giao thông vòng xuyến.)",
  1,
  "",
  "imgs/D1-90.png"
 ],
 [
  "Trong khu vực có biển chỉ dẫn này (cấm xe máy chở 2), cấm xe mô tô phân khối lớn và xe mô tô (xe máy) không được chở hai người.",
  1,
  "",
  "imgs/D1-91.png"
 ],
 [
  "Đường một chiều có ba làn đường lưu thông trở lên, nếu không có chỉ dẫn phân làn thì xe ô tô thông thường do có tốc độ chạy nhanh nên phải lưu thông tại làn xa nhất phía phải.",
  0
 ],
 [
  "Khi hai xe đi vượt qua nhau ngược chiều tại khu dốc hẹp thì xe leo dốc phải nhường đường cho xe xuống dốc.",
  0,
  "Ngược lại: xe xuống dốc nhường cho xe lên dốc"
 ],
 [
  "Đang lái xe trên đường một chiều, khi có xe cấp cứu tới gần thì phải đi sát bên trái đường và nhường đường.",
  0,
  "Trái phải đều được"
 ],
 [
  "Sau khi kết thúc việc rẽ phải hay trái thì phải nhanh chóng tắt đèn tín hiệu rẽ.",
  1
 ],
 [
  "Tại khu vực có biển chỉ dẫn này thì không thể đổi làn.",
  0,
  "",
  "imgs/D1-96.png"
 ],
 [
  "Làn đường leo dốc trên đường cao tốc là thiết kế dành cho các xe chạy với tốc độ chậm như xe tải chở hàng, do vậy cấm các xe oto thông thường lưu thông.",
  0,
  "Làn đường leo dốc tiếng Nhật là 登坂車線"
 ],
 [
  "Đường có biển chỉ dẫn này nếu không có người đi bộ hay xe đạp thì xe ô tô có thể được lưu thông.",
  0,
  "",
  "imgs/D1-98.png"
 ],
 [
  "Trong thời gian đỗ xe, phiếu gửi xe phải dán ở phía trước xe và dán tại nơi sao cho dễ nhìn ví dụ như phía trong của kính trước xe ô tô.",
  1,
  "",
  "imgs/D1-99.png"
 ],
 [
  "Biển chỉ dẫn này có ý nghĩa là \"Khu vực cấm dừng xe\".",
  0,
  "",
  "imgs/D1-100.png"
 ],
 [
  "Khi lưu thông tại các khu vực biển báo này (từ hành) thì vừa giảm tốc độ vừa lưu thông.",
  0,
  "徐行 chứ không phải giảm tốc độ 減速",
  "imgs/D1-101.png"
 ],
 [
  "Khoảng cách phanh là khoảng cách tính từ lúc lái xe cảm nhận thấy nguy hiểm và nhấn phanh, từ lúc phanh ăn cho tới khi xe dừng hẳn.",
  0,
  "Đây là khoảng cách dừng 停止距離"
 ],
 [
  "Khi dừng xe ô tô, chỉ lên phanh mạnh một lần vì nếu phanh nhiều lần sẽ làm mất khả năng phán đoán của người lái xe phía sau.",
  0
 ],
 [
  "Trường hợp phanh gấp đối với xe ô tô có trang bị hệ thống chống bó cứng phanh kiểu ABS thì cần phải nhấn phanh từ từ và chia thành nhiều lần.",
  0
 ],
 [
  "Khi bị nhầm cửa ra trên đường cao tốc thì vừa chú ý xe phía sau vừa lùi xe để quay lại đường chính của đường cao tốc.",
  0
 ],
 [
  "Khi định rẽ trái thì phải đi sát lề trái của đường nếu có thể và đi với tốc độ chậm.",
  1
 ],
 [
  "Khi xảy ra tai nạn giao thông, nhằm tránh tai nạn liên tiếp xảy ra và không gây cản trở các phương tiện giao thông khác, hãy di chuyển phương tiện vào lề đường hoặc khu vực trống rồi tắt động cơ.",
  1
 ],
 [
  "Khi xe máy, xe gắn máy chạy trên đường bùn lầy hay đường sỏi đá thì việc quan trọng là vừa thay đổi tốc độ bằng tay ga vừa giữ thăng bằng.",
  1
 ],
 [
  "Khi đỗ xe ô tô tự động, thì nhấn phanh chân, giữ nguyên như thế rồi gạt phanh tay chuyển cần gạt về P là được.",
  1
 ],
 [
  "Khi có thông báo động đất khẩn cấp trong lúc lái xe, người lái xe tùy tình hình xung quanh vừa bật đèn cảnh báo nguy hiểm, sau khi báo tín hiệu chú ý cho các xe phía sau, tránh phanh gấp, từ từ giảm tốc độ.",
  1
 ],
 [
  "Con số của mác dán tại kính trước của xe ô tô là hiển thị thời hạn kết thúc bảo hiểm trách nhiệm bồi thường thiệt hại của xe ô tô.",
  0
 ],
 [
  "Ngoại trừ các trường hợp bất khả kháng như rẽ trái hay rẽ phải, hay có công trình đang thi công thì không được lưu thông tại làn đường có biển chỉ dẫn này. Vì có khả năng xe buýt tới gần từ phía sau mà đường đông không thể chuyển sang làn đường khác.",
  0,
  "",
  "imgs/D1-112.png"
 ],
 [
  "Ngay cả trên đường đô thị có lưu lượng giao thông nhiều vào ban đêm, nên hướng đèn pha lên khi điều khiển xe.",
  0
 ],
 [
  "Cho dù việc gây hại môi trường do phương tiện giao thông ít nhưng cũng nên tránh việc xuất phát đột ngột, phanh gấp hay nẹt pô không cần thiết.",
  1
 ],
 [
  "Độ sáng thay đổi đột ngột sẽ làm giảm thị lực đột ngột trong chốc lát do vậy tại cửa ra vào các đường hầm giảm tốc độ khi lưu thông.",
  1
 ],
 [
  "Khi nước vào trong bộ phận phanh sẽ làm phanh không có tác dụng hay tác dụng ít do vậy nên tránh đi lại tại các khu vực nước ngập sâu.",
  1
 ],
 [
  "Khi lưu thông trên phần đường ở các khúc cua gấp, mà có chỉ dẫn như hình vẽ này, phải lấn xe sang phần đường bên phải tính từ vạch phân cách trung tâm.",
  0,
  "",
  "imgs/D1-117.png"
 ],
 [
  "Khi xảy ra tai nạn tại đường cao tốc, lấy các bị phòng chống nguy hiểm cần thiết như đặt các thiết bị báo dừng xe thì không được ở lại trong xe mà phải đi tránh nạn nơi an toàn.",
  1
 ],
 [
  "Biển chỉ dẫn này có ý nghĩa là quy định khu vực đỗ xe trên đường và các xe được đỗ trong một khoảng thời gian nhất định và không được đỗ xe vượt quá thời gian quy định.",
  1,
  "",
  "imgs/D1-119.png"
 ],
 [
  "Biển chỉ dẫn này có ý nghĩa là \"khu vực an toàn\".",
  1,
  "",
  "imgs/D1-120.png"
 ],
 [
  "Do khi lái xe ở tốc độ cao thì lốp sẽ bị gia tăng nhiệt do vậy trước khi chạy xe lên cao tốc thì nên giảm áp suất không khí trong lốp xe.",
  0
 ],
 [
  "Khi rẽ phải ở ngã tư có bảng chỉ dẫn này không phải đi chậm.",
  0,
  "",
  "imgs/D1-122.png"
 ],
 [
  "Khi đang chạy xe mà bị nổ lốp, xe sẽ bị lạc theo hướng mà mình không mong muốn và gây nguy hiểm, do vậy cần nắm chắc tay lái, phanh gấp và nhanh chóng dừng xe.",
  0,
  "Tránh phanh gấp"
 ],
 [
  "Khi có nguy cơ đâm trực diện với xe đối diện, thì cố gắng tránh tối đa sang bên trái, kể cả ngay khi trước khoảnh khắc đâm cũng cố gắng bẻ lái hay nhấn phanh. Nếu phía ngoài đường lộ không có nguy hiểm thì chạy ra khỏi đường lộ cũng không sao.",
  1,
  "",
  "imgs/D1-124.png"
 ],
 [
  "Khi đi vào các đường chính của đường cao tốc, không quan tâm có xe đang chạy trên đường chính hay không, cứ chạy theo phương pháp đúng như mũi tên là chính xác.",
  1,
  "Câu này có từ \"không quan tâm\" nhưng vẫn đúng - được dịch từ tiếng Nhật にかかわらず"
 ],
 [
  "Hiện tượng xe trượt nước là dầu phanh sinh ra bọt khí và làm cho phanh không có tác dụng.",
  0
 ],
 [
  "Xe đạp gắn động cơ thông thường (xe gắn máy hoặc xe máy điện) thì không cần dùng mũ bảo hiểm.",
  0
 ],
 [
  "Vì biển báo này được biểu thị có trường học, trường mẫu giáo hay đường đi học gần đó, do có nhiều trẻ em qua lại, nên cần phải cẩn thận khi lái xe.",
  0,
  "Biển này là vạch người đi bộ qua đường 横断歩道",
  "imgs/D1-128.png"
 ],
 [
  "Do khởi động đột ngột, phanh gấp và rẽ đột ngột trên đường tuyết có thể gây trượt, vì vậy hết sức cẩn thận khi sử dụng vô lăng và phanh.",
  1
 ],
 [
  "Khi đi qua ngã tư có đèn vàng nhấp nháy thì ô tô và xe điện mặt đất phải dừng lại, xác nhận an toàn.",
  0,
  "Chỉ cần chú ý - không cần dừng / đèn đỏ nhấp nháy mới dừng",
  "imgs/D1-130.png"
 ],
 [
  "Khi vượt qua bên cạnh những người đi bộ tàn tật như người sử dụng trắng hay nạng vàng thì phải tạm dừng hoặc đi chậm.",
  1
 ],
 [
  "Biển chỉ dẫn này (vòng xuyến màu vàng) có ý nghĩa là phía trước có nút giao thông vòng xuyến.",
  0,
  "Biển màu xanh mới là giao thông vòng xuyến",
  "imgs/D1-132.png"
 ],
 [
  "Khi xe ô tô rẽ phải ở ngã tư đối diện với đèn tín hiệu này trong lúc đợi mũi tên đèn tín hiệu bên phải bật sáng thì phải tiến trung tâm của ngã tư và dừng đợi ở đó.",
  0,
  "",
  "imgs/D1-133.png"
 ],
 [
  "Khi xảy ra tai nạn, việc giữ nguyên hiện trường là quan trọng cho nên dù có cản trở việc lưu thông của các phương tiện khác cũng không được di chuyển xe và phải đợi cảnh sát tới giải quyết.",
  0
 ],
 [
  "Khi dừng xe trên đường lên dốc sát với xe phía trước, xe phía trước có khả năng lùi về phía sau nên không đỗ xe quá gần với xe phía trước.",
  1
 ],
 [
  "Trên đường có biển báo này (cấm đỗ xe), cấm đỗ xe nhưng không cấm dừng xe.",
  1,
  "",
  "imgs/D1-136.png"
 ],
 [
  "Cả 2 biển chỉ dẫn phụ này (mũi tên đỏ + cấm) có ý nghĩa giống nhau.",
  0,
  "",
  "imgs/D1-137.png"
 ],
 [
  "Xe máy, xe gắn máy do tính năng gia tốc ưu việt nên có lợi thế khi cua vòng nhỏ, do vậy cho dù khi xe phía trước định đổi làn để rẽ phải thì vẫn có thể vượt được.",
  0
 ],
 [
  "Ý nghĩa tín hiệu giao thông bằng tay của cảnh sát viên khi để thẳng cánh tay ngang bằng vai như hình vẽ này thì đối với giao thông mũi tên giống như tín hiệu đèn vàng.",
  0,
  "Đèn xanh",
  "imgs/D1-139.png"
 ],
 [
  "Trong trường hợp như hình vẽ, trường hợp xe thông thường (xe A) kéo xe thông thường bị hỏng (xe B) bằng dây thừng thì không cần giấy phép xe kéo.",
  1,
  "",
  "imgs/D1-140.png"
 ],
 [
  "Các giấy tờ kiểm định xe và giấy bảo hiểm trách nhiệm bồi thường thiệt hại xe cộ cất giữ tại nhà, khi lái cần mang theo bản photo là được.",
  0
 ],
 [
  "Đối với áp suất lốp xe, nên kiểm tra có đủ hơi hay không bằng cách độ võng tiếp xúc bánh xe đối với mặt đường.",
  0
 ],
 [
  "Tại làn chính của các đường cao tốc mà không có biển báo hoặc chỉ dẫn quy định tốc độ tối đa, tốc độ tối đa của oto thông thường và các phương tiện khác là 80km/h.",
  0,
  "60km/h"
 ],
 [
  "Khi đi đến đường có vạch kẻ đường cho người đi bộ, người đi bộ có ý định băng qua đường nhưng phát hiện thấy xe của bạn đang tiến đến nên người đi bộ lùi lại nên bạn đã bấm còi chú ý rồi đi qua bằng cách đi chậm.",
  0
 ],
 [
  "Khi điều khiển xe 2 bánh đi qua vũng bùn hoặc nước trong lúc đi qua bạn phải lùi về số thấp thay đổi tốc độ chậm hơn để an toàn.",
  1
 ],
 [
  "Khi kiểm tra dầu động cơ bằng đồng hồ đo dầu thì dầu không dính là tốt.",
  0
 ],
 [
  "Dây đai quạt hoạt động tốt là khi kiểm tra bằng tay dây đai quạt hơi chùng là tốt.",
  1
 ],
 [
  "Khi chất hàng hóa lên thùng xe của xe máy 2 bánh cỡ lớn hoặc xe máy 2 bánh thông thường, có thể chất hàng hòa nhô ra tối đa 50cm từ phía sau thùng xe.",
  0
 ],
 [
  "Khi nhấn chân ga cảm giác thấy nhẹ thì có khả năng bị rỉ dầu phanh.",
  0
 ],
 [
  "Tại các đường tổng hợp không có biển chỉ dẫn hay biển báo tốc độ tối đa thì tốc độ tối đa cho các xe oto thông thường là 50km/h.",
  0,
  "60km/h"
 ],
 [
  "Đối với xe ô tô thông thường với giới hạn chở người là 5 người thì ngoài lái xe có thể chở được 3 người lớn, 3 trẻ em dưới 12 tuổi.",
  0,
  "Chú ý xem đã tính tài xế chưa"
 ],
 [
  "Đối với phanh của xe máy, xe gắn máy, cần phanh cần phải có phạm vi xoay chuyển.",
  1,
  "Phạm vi xoay chuyển: khoảng bóp phanh cho đến khi phanh hoạt động. あそび"
 ],
 [
  "Khi lưu thông tại đường có biển báo này (tàu điện) nếu có xe điện đến từ phía sau các phương tiện phải thoát ra hoặc giữ khoảng cách an toàn.",
  1,
  "Nếu giữ khoảng cách an toàn vẫn chạy bình thường",
  "imgs/D1-153.png"
 ],
 [
  "Chiều cao của hàng hóa trên xe máy 2 bánh hoặc xe gắn máy dưới 50cc không quá 2m tính từ mặt đất.",
  1
 ],
 [
  "Xe oto mà có bề rộng vượt quá bề rộng ghi trong biển báo này thì không được lưu thông.",
  1,
  "",
  "imgs/D1-155.png"
 ],
 [
  "Khi xe máy để nguyên động cơ đang chạy và xuống dắt bộ thì không được tính như người đi bộ.",
  1
 ],
 [
  "Với những người lấy bằng xe máy thông thường chưa được 1 năm nhưng lấy được bằng xe máy cỡ lớn thống thường thì có thể điều khiển xe máy chở 2 người.",
  0
 ],
 [
  "Xe A như hình vẽ có thể tiến theo lộ trình như mũi tên và rẽ phải ở ngã tư.",
  0,
  "",
  "imgs/D1-158.png"
 ],
 [
  "Đối với xe gắn máy dưới 50cc như trong hình vẽ thì lực li tâm hoạt động theo hướng A.",
  1,
  "",
  "imgs/D1-159.png"
 ],
 [
  "Khi lưu thông trên cao tốc hay lấy vạch trắng bên trái làm cư li di chuyển do đó đi lệch 1 chút về phía bên trái.",
  1,
  "Chú ý câu này – nhiều bạn không để ý vào đề thi sẽ phân vân"
 ],
 [
  "Khi đi trên đường có nhiều tuyết nếu đi vào vết xe trước thì dễ trơn trượt do đó không nên đi vào vết xe trước.",
  0,
  "Nên đi vào vết xe trước"
 ],
 [
  "Khi đi vào khúc cua hẹp xe đối diện có khả năng lấn làn do đó nên đi sát về phía bên lề trái.",
  0,
  "Giảm tốc độ, không đi quá sát lề"
 ],
 [
  "Khi lái xe ở tốc độ cao thị lực kém đi đặc biệt khó nhìn rõ mọi vật ở cự ly xa.",
  0,
  "Khó nhìn rõ mọi vật ở cự ly gần"
 ],
 [
  "Khi điều khiển xe ô tô có trang bị dây an toàn, người điều khiển xe cũng như hành khách ở ghế phụ và ghế ngồi phía sau phải thắt dây an toàn và không cần khóa cửa xe.",
  0,
  "Cần khóa cửa xe"
 ],
 [
  "Khi vượt xe buýt của các trường mẫu giáo đang dừng thì phải đi chậm và vượt qua bên hông.",
  0,
  "Tạm dừng, quan sát"
 ],
 [
  "Khi bánh sau bắt đầu trượt sang phải đầu tiên cần đánh vô lăng sang trái và phanh ngay lập tức.",
  0,
  "Trượt hướng nào, đánh lái sang hướng đó"
 ],
 [
  "Nếu bị đèn của xe ngược chiều chiếu trực tiếp vào mắt thì rất nguy hiểm vì thị lực của mắt sẽ bị giảm trong chốc lát nên bạn cố gắng không nhìn trực diện hoặc cố gắng nhìn thẳng vào đèn của xe phía trước.",
  1
 ],
 [
  "Trong hầm dù có vạch phân làn đường bạn cũng không được phép vượt qua.",
  0,
  "Có phân làn, được vượt"
 ],
 [
  "Khi xảy ra tai nạn bạn cần gọi xe cấp cứu giúp người bị thương còn việc khai báo tường trình với cảnh sát thuộc về bên có lỗi lớn hơn.",
  0
 ],
 [
  "Khi đi lên dốc hẹp xe lên dốc phải nhường cho xe xuống dốc.",
  0,
  "Xe xuống dốc nhường cho xe lên dốc"
 ],
 [
  "Khi lưu thông tại các ngã tư có bảng chỉ dẫn này mà không có vạch dừng thì phải dừng trước biển này.",
  0,
  "Dừng trước ngã tư - không phải dừng trước biển",
  "imgs/D1-171.png"
 ],
 [
  "Nếu người có giấy phép lái xe nhưng bị đình chỉ lái xe, trong thời gian bị đình chỉ vì không có giấy phép trên tay nên họ sẽ bị coi là không mang theo giấy phép lái xe.",
  0,
  "Lỗi lái xe không có bằng lái"
 ],
 [
  "Biển báo này là \"khu vực dành cho người đi bộ\".",
  0,
  "",
  "imgs/D1-173.png"
 ],
 [
  "Khi bị chóa mắt bởi đèn xe đối diện, bạn nhắm mắt lại để bớt chóa.",
  0
 ],
 [
  "Phương tiện sử dụng gia đình nếu có kiểm định định kì thì không cần kiểm tra hằng ngày.",
  0
 ],
 [
  "Ở đường núi khi vào khúc cua, xe đối diện có khả năng lấn sang làn đối diện, nên bạn lái xe sát mép trái nhất có thể.",
  0,
  "Ở đường núi và đường tàu (踏切) tránh chạy sát mép đường bên trái"
 ],
 [
  "Có thể vượt xe phía tước trên đường dốc lên dốc nếu trong tốc độ cho phép.",
  0,
  "Lên dốc cấm vượt dù tốc cho phép"
 ],
 [
  "Khi lên xuống xe nên mở hé cửa kiểm tra xác nhận an toàn, nếu an toàn thì mới mở hết cửa. Nếu khu vực đông người, xe cộ thì nên lên xuống phía bên trái.",
  1
 ],
 [
  "Tại ngã tư, đèn giao thông của đường giao nhau đã chuyển sang màu đỏ, nên đèn tín hiệu cho làn đường của mình chắc chắn là màu xanh, vì vậy không cần chú ý đến đèn và di chuyển.",
  0
 ],
 [
  "Khu vực có biển báo này (8-20) cấm đỗ xe từ 8-20h.",
  1,
  "",
  "imgs/D1-180.png"
 ],
 [
  "Trên đường cao tốc – tốc độ tối đa của xe tải chở hàng hóa cỡ lớn và xe chở khách cỡ lớn là đều 100km/h.",
  0
 ],
 [
  "Trên đường cao tốc, khi buồn ngủ bạn tấp vào lề và nghỉ ngơi.",
  0
 ],
 [
  "Ghế lái của xe oto cỡ lớn, cỡ trung bình cao hơn so với xe oto thông thường, mang lại tầm nhìn tốt hơn, do đó khoảng cách giữa các xe có thể ngắn hơn so với xe oto thông thường.",
  0
 ],
 [
  "Tốc độ an toàn là tốc độ bằng 1 nửa tốc độ cho phép.",
  0
 ],
 [
  "Nếu đã đi chậm, thì dù nước từ vũng nước bắn vào người đi bộ cũng không phải lỗi của người lái xe.",
  0
 ],
 [
  "Biển báo này (cấm vào) được đặt tại lối ra của đường một chiều, phương tiện không được đi vào từ hướng có biển báo.",
  1,
  "",
  "imgs/D1-186.png"
 ]
];

const DE2_RAW = [
 [
  "Biển tốc độ cấm vượt quá 50km/h nhưng nếu thấy không có xe lưu thông hoặc lượng xe ít có thể vượt quá tốc độ quy định trên.",
  0,
  "",
  "imgs/D2-1.png"
 ],
 [
  "Khi lưu thông trên đường, mình tuân thủ luật lệ giao thông là được. Không cần quan tâm tới việc chú ý khi lưu thông sao cho những người khác có thể lưu thông an toàn.",
  0
 ],
 [
  "Biển báo này ở phía trước giao lộ cho biết đường bạn đang đi là đường ưu tiên.",
  1,
  "",
  "imgs/D2-3.png"
 ],
 [
  "Ô tô và xe điện mặt đất gặp tín hiệu này (đèn đỏ nhấp nháy) tạm thời dừng ở trước vạch dừng và có thể đi tiếp sau khi đảm bảo an toàn.",
  1,
  "",
  "imgs/D2-4.png"
 ],
 [
  "Xe oto khi đối diện với tín hiệu đèn giao thông này (đỏ + mũi tên xanh) phải tạm thời dừng lại ngay trước ngã tư và sau khi xác nhận an toàn thì rẽ phải.",
  0,
  "",
  "imgs/D2-5.png"
 ],
 [
  "Biển báo này (mũi tên trái) cho biết ngay cả khi đèn giao thông phía trước có màu đỏ hoặc vàng, oto và xe đạp gắn máy vẫn có thể rẽ trái nhưng phải chú ý người đi bộ.",
  1,
  "",
  "imgs/D2-6.png"
 ],
 [
  "Biển này (đường trơn) có ý nghĩa báo hiệu đường có khúc cua nguy hiểm.",
  0,
  "",
  "imgs/D2-7.png"
 ],
 [
  "Xe oto đối diện với tín hiệu đèn giao thông này (đèn vàng) có thể tiếp tục di chuyển về phía trước nếu không thể dừng an toàn ở vị trí dừng.",
  1,
  "",
  "imgs/D2-8.png"
 ],
 [
  "Biển báo này (cấm vào) được đặt ở lối ra của đường một chiều và cho biết các phương tiện được cấm đi vào.",
  1,
  "",
  "imgs/D2-9.png"
 ],
 [
  "Cảnh sát dơ 2 tay lên thẳng, xe đối diện với cảnh sát là đồng nghĩa với tín hiệu đèn đỏ.",
  1
 ],
 [
  "Ngay cả khi bạn đang ở nơi có biển báo này (STOP), nếu ở ngã tư tầm nhìn tốt, không có xe ô tô đi qua thì bạn vẫn có thể đi tiếp mà không cần phải dừng lại tạm thời.",
  0,
  "Phải tạm dừng, dù an toàn",
  "imgs/D2-11.png"
 ],
 [
  "Tín hiệu đèn giao thông màu đỏ nhưng có cảnh sát giao thông điều khiển hiệu lệnh khác thì bạn phải theo hiệu lệnh đó.",
  1
 ],
 [
  "Dù uống một chút rượu cũng không được lái xe.",
  1
 ],
 [
  "Khi bạn bị cảnh sát yêu cầu kiểm tra giấy tờ khi bạn vi phạm và gây tai nạn thì không cần phải xuất trình giấy tờ xe.",
  0
 ],
 [
  "Người có bằng loại 2 thì có thể dạy lái ngoài đường mà không cần quan tâm đến số năm kinh nghiệm.",
  1
 ],
 [
  "Thiết bị chỉ đường bạn không được nhìn vào đó liên tục vì gây nguy hiểm ảnh hưởng đến việc quan sát phía trước.",
  1
 ],
 [
  "Cả người lái xe và người ngồi phía sau xe, khi xuống xe đều phải chú ý cẩn thận.",
  1
 ],
 [
  "Khi trên đường không có biển báo tốc độ, thì xe oto có thể chạy với vận tốc dưới 60km/h.",
  1
 ],
 [
  "Người ngồi lái và người ngồi cạnh người lái phải thắt dây an toàn còn người ngồi sau thì không cần.",
  0
 ],
 [
  "Tốc độ an toàn là tốc độ khi bạn đi với vận tốc bằng một nửa vận tốc trên biển.",
  0
 ],
 [
  "Tại đường 1 chiều có thể lưu thông sang bên phải tính từ vạch trung tâm.",
  1
 ],
 [
  "Tốc độ tối đa với oto chở khách thông thường trên đường công cộng không có biển báo, vạch kẻ quy định thì không được vượt quá 60km/h.",
  1
 ],
 [
  "Xe làn A có thể chuyển sang làn B.",
  1,
  "",
  "imgs/D2-23.png"
 ],
 [
  "Biển báo này chỉ thị khu vực bắt buộc phải bấm còi.",
  1,
  "Dù an toàn vẫn phải bấm",
  "imgs/D2-24.png"
 ],
 [
  "Khi rẽ trái đánh lái xong rồi bật xi nhan.",
  0
 ],
 [
  "Cho dù đã được chỉ dẫn về khu vực cấm ở phía trước đồn cảnh sát, trạm cứu hoả vv.. nhưng đó chỉ là chỉ dẫn trong lúc khẩn cấp nên nếu không phải tình huống khẩn cấp thì cũng có thể đi vào khu vực được chỉ dẫn và dừng lại.",
  0,
  "",
  "imgs/D2-26.png"
 ],
 [
  "Xe oto rẽ phải tại giao lộ có biển báo này (vòng xoay/vạch chéo), nếu đi theo hướng mũi tên thì dù có xe đối diện đến vẫn có thể ưu tiên đi trước mà không cần nhường.",
  0,
  "",
  "imgs/D2-27.png"
 ],
 [
  "Tại đường dốc khúc cua và ngã tư tầm nhìn khó bạn không được vượt xe oto khác và xe đạp gắn động cơ (xe 50cc).",
  1
 ],
 [
  "Phần đường dành riêng cho xe buýt bạn đang đi trong phần đường đó thấy xe buýt đi phía sau bạn tăng tốc và vẫn đi trong làn đường đó.",
  0
 ],
 [
  "Xe tự động khi xác nhận cài số ở D thì đạp phanh xe để khởi động.",
  0,
  "Cài cần gạt về vị trí P, kéo phanh tay"
 ],
 [
  "Nếu thấy phía trước ngã 4 có khả năng ùn tắc đường thì đèn tín hiệu giao thông có là xanh cũng không được đi vào ngã tư.",
  1
 ],
 [
  "Vì biển báo này biểu thị có trường học, trường mẫu giáo hay đường đi học gần đó, do có nhiều trẻ em qua lại, nên cần phải lái xe cẩn thận.",
  1,
  "",
  "imgs/D2-32.png"
 ],
 [
  "Tại ngã tư không có vạch sang đường cho người đi bộ hoặc gần khu vực đó có người đi bộ băng qua đường, thì phải đi chậm và dừng lại không được cản trở họ.",
  1
 ],
 [
  "Khi sử dụng ghế trẻ em phải chọn loại ghế phù hợp với vóc dáng của trẻ, có thể cố định chắc chắn vào ghế theo hướng dẫn sử dụng.",
  1
 ],
 [
  "Không được vượt xe phía trước khi xe phía sau đang tăng tốc vượt bạn.",
  1
 ],
 [
  "Xe buýt, xe đạp gắn máy, xe cơ giới loại nhỏ, xe hạng nhẹ được phép lưu thông trên làn đường dành riêng có biển báo hiệu này, các xe khác không được lưu thông.",
  1,
  "",
  "imgs/D2-36.png"
 ],
 [
  "Bằng lái xe phổ thông được phép lái xe 10 chỗ đổ lại.",
  1
 ],
 [
  "Lái xe khi say rượu là vấn đề do chính người lái xe nhận thức và bên thứ ba sẽ không chịu trách nhiệm pháp lý ngay cả khi bên thứ ba cung cấp hoặc giới thiệu rượu cho người đang cố gắng lái xe.",
  0
 ],
 [
  "Đường có biển báo này (hướng dẫn đường ưu tiên) là đường ưu tiên với đường giao nhau phía trước.",
  0,
  "Đường phía trước ưu tiên",
  "imgs/D2-39.png"
 ],
 [
  "Khi đi qua vũng nước có người đi bộ đang đi, dù đi chậm giảm tốc độ mà vẫn bắn nước lên người đi bộ thì không cần phải chịu trách nhiệm.",
  0
 ],
 [
  "Tín hiệu đèn đỏ nhấp nháy phương tiện bắt buộc phải dừng lại quan sát an toàn rồi mới được đi.",
  1
 ],
 [
  "Khi đi qua người đi bộ nếu không giữ được khoảng cách an toàn thì phải đi chậm.",
  1
 ],
 [
  "Vì bằng lái xe tạm thời quan trọng, nên phải để ở nhà. Khi đi tập lái chỉ cần mang bản photo cũng không sao.",
  0
 ],
 [
  "Khi trên đường có vạch liền màu vàng thì ta có thể lấn sang vạch này và vượt lên xe trước.",
  0
 ],
 [
  "Khi xe sau muốn vượt nhưng do không đủ khoảng cách, thì ta phải ép vào lề bên trái hết mức và nhường đường.",
  1
 ],
 [
  "Trường hợp đang lưu thông trên đường ưu tiên của xe buýt, thấy phía sau xe buýt đang tiến đến mà do phía trước bị tắc nghẽn nên vẫn lưu thông ở làn đấy.",
  0
 ],
 [
  "Khi phanh gấp vì được trang bị bó phanh ABS nên cần giẫm mạnh phanh 1 mạch, không nên giẫm liên tục vì sẽ mất hiệu quả của phanh.",
  1
 ],
 [
  "Khi chạy qua khu vực an toàn có người đi bộ, phải chạy chậm lại.",
  1
 ],
 [
  "Xe bạn đang di chuyển ở ngã tư, vì thấy xe cấp cứu tiến lại nên bạn đã dừng xe ngay lập tức ở giữa ngã tư.",
  0
 ],
 [
  "Khi rẽ phải thì di chuyển hết sang bên trái để rẽ phải dễ dàng hơn.",
  0
 ],
 [
  "Các phương tiện đối diện với tín hiệu đèn có mũi tên xanh thì được phép rẽ phải.",
  1,
  "",
  "imgs/D2-51.png"
 ],
 [
  "Biển này cấm vượt nhưng thấy lượng xe ít thì có thể lấn sang làn bên phải để vượt.",
  0,
  "",
  "imgs/D2-52.png"
 ],
 [
  "Tại đường có biển chỉ dẫn này với vạch kẻ ở trung tâm, cấm lưu thông lấn qua làn đường bên phải để vượt phương tiện khác.",
  1,
  "",
  "imgs/D2-53.png"
 ],
 [
  "Biển này báo hiệu đường giao nhau phía trước là đường ưu tiên.",
  0,
  "Đường mình đang đi là đường ưu tiên",
  "imgs/D2-54.png"
 ],
 [
  "Khi lưu thông trên đường có tín hiệu của cảnh sát viên hướng dẫn thì phải theo hướng dẫn đó.",
  1
 ],
 [
  "Gần đỉnh dốc đi xuống hoặc dốc lên, bạn có thể vượt xe đạp gắn động cơ (xe 50cc).",
  0
 ],
 [
  "Biển báo này là biển báo cấm đỗ.",
  0,
  "",
  "imgs/D2-57.png"
 ],
 [
  "Không được yêu cầu người không có bằng lái hoặc đã uống bia rượu lái xe.",
  1
 ],
 [
  "Biển chỉ dẫn này có ý nghĩa là \"khu vực cấm dừng xe\".",
  0,
  "",
  "imgs/D2-59.png"
 ],
 [
  "Biển báo có này có ý nghĩa là cấm xe có trọng tải hàng hoá quá 5,5t.",
  0,
  "Tổng tải trọng",
  "imgs/D2-60.png"
 ],
 [
  "Khi có bằng lái xe oto thông thường có thể lái được xe gắn động cơ dưới 50cc.",
  1
 ],
 [
  "Mặc dù đã uống rượu vào tối hôm trước nhưng sáng hôm sau vẫn còn ảnh hưởng, nên phải chú ý khi lái xe.",
  1
 ],
 [
  "Nơi có biển này (cấm vượt phải mũi tên), các phương tiện không được băng qua đường (trừ những phương tiện phải rẽ trái để vào, ra đường hoặc địa điểm khác).",
  1,
  "",
  "imgs/D2-63.png"
 ],
 [
  "Khi khởi hành xe chỉ cần xác nhận phía sau nếu an toàn thì không cần bật đèn tín hiệu.",
  0
 ],
 [
  "Khi bạn muốn vượt xe phía trước mà tốc độ vẫn trong phạm vi cho phép thì bạn được vượt xe đó.",
  1
 ],
 [
  "Khi người lái xe ra tín hiệu như hình dưới (nhìn từ phía sau) là tín hiệu chạy chậm hoặc dừng xe.",
  1,
  "",
  "imgs/D2-66.png"
 ],
 [
  "Xe tự động trước khi khởi động cần xác nhận đã khoá phanh tay và để ở P chưa.",
  1
 ],
 [
  "Khi đi qua đường tàu thanh ngang mới chắn xuống nhưng chưa xuống hết có thể tăng tốc và vượt qua.",
  0
 ],
 [
  "Khi có ý định chạy qua bên hông xe đạp để rẽ trái tại nút giao thông, có thể xe đạp sẽ bị bạn ép nên đã bấm còi nhắc nhở chú ý rồi rẽ trái.",
  0
 ],
 [
  "Khi băng qua vỉa hè để ra vào khu vực lề đường, người điều khiển phải tạm dừng phương tiện, không gây cản trở lưu thông của người đi bộ.",
  1
 ],
 [
  "Khi gặp biển này phải di chuyển theo đúng hướng mũi tên trên đường trừ trường hợp gặp xe cứu hộ khẩn cấp.",
  1,
  "",
  "imgs/D2-71.png"
 ],
 [
  "Khi đi qua người đi bộ và đi xe đạp cần giữ khoảng cách an toàn.",
  1
 ],
 [
  "Khi lái xe trên đường không có vạch cho người đi bộ thì không cần nhường đường cho người đi bộ.",
  0
 ],
 [
  "Biển báo này cho biết sắp tới số làn đường sẽ giảm dần.",
  1,
  "",
  "imgs/D2-74.png"
 ],
 [
  "Khi đi qua xe buýt của mẫu giáo đang dừng cần phải dừng lại xác nhận an toàn rồi mới đi qua.",
  1
 ],
 [
  "Mặc dù mỗi cá nhân là khác nhau nhưng do người cao tuổi có khả năng nhận biết nguy hiểm chậm hơn bình thường nên khi lái xe gặp người cao tuổi phải chú ý.",
  1
 ],
 [
  "Đối với xe có hệ thống phanh chống bó cứng ABS thì cần nhấn phanh chia làm nhiều lần.",
  0
 ],
 [
  "Khi gặp biển này các xe buộc phải đi theo hướng mũi tên. (Biển này nhưng phía dưới có 8-20: câu hỏi: từ 8 sáng đến 8 giờ tối không được rẽ phải).",
  1,
  "",
  "imgs/D2-78.png"
 ],
 [
  "Tại nút giao thông có bề rộng các làn đường bằng nhau thì bạn phải nhường đường cho các xe đến từ bên trái.",
  1
 ],
 [
  "Khi phanh xe nên phanh mạnh 1 lần tránh phanh nhiều lần làm giảm khả năng phán đoán của người lái phía sau.",
  0
 ],
 [
  "Khi vượt các oto và xe dưới 50cc theo luật lệ giao thông quy định phải vượt bên phải của các xe đó.",
  1
 ],
 [
  "Khi ra tín hiệu rẽ trái đồng thời là xoay tay lái.",
  0
 ],
 [
  "Cắt qua khu vực tiếp giáp lề đường mà người đi bộ ra vào tại khu vực lề đường này thì chỉ cần đi chậm không cần dừng lại.",
  0,
  "Phải dừng"
 ],
 [
  "Khi chuẩn bị rẽ trái ở ngã 4 phía trước thì cho xe tiến vào giữa đường đồng thời đi chậm và rẽ trái (không quan tâm quy luật vòng xuyến).",
  0
 ],
 [
  "Tại gần các nút giao thông và khu vực xung quanh là nơi xảy ra nhiều vụ tai nạn giao thông nhất nên hãy chú ý tăng tốc và vượt nhanh.",
  0
 ],
 [
  "Cấm xe có tổng trọng tải quá 5,5t đi qua.",
  1,
  "",
  "imgs/D2-86.png"
 ],
 [
  "Trên làn đường xe chạy không có gắn biển báo hiệu tốc độ thì xe oto cũng không được phép chạy quá 60km/h.",
  1
 ],
 [
  "Lái xe tắt nguồn điện thoại để chế độ phù hợp để không ảnh hưởng tới lái xe (ngoại trừ các thiết bị tự động trên xe).",
  1
 ],
 [
  "Biển cấm quay đầu từ 8-20h.",
  1,
  "",
  "imgs/D2-89.png"
 ],
 [
  "Khi đi qua khu vực sang đường của người đi bộ, dù đã xác nhận rõ ràng không có người đi bộ nhưng vẫn phải giảm tốc độ đi chậm lại.",
  0,
  "Giữ nguyên tốc độ cũng không sao"
 ],
 [
  "Biển báo phía trước có đường chữ Y.",
  0,
  "",
  "imgs/D2-91.png"
 ],
 [
  "Bên cạnh là xe đạp khi vượt bạn phải chú ý tốc độ và cự ly an toàn.",
  1
 ],
 [
  "Trên đường có biển báo như trong hình, nếu chú ý quan sát người đi bộ thì các xe không phải là xe đạp thông thường vẫn có thể lưu thông chậm.",
  0,
  "",
  "imgs/D2-93.png"
 ],
 [
  "Tomare dừng lại trước vạch trắng, nếu không có vạch trắng thì phải dừng trước biển này.",
  0,
  "Phải dừng trước ngã 3, ngã 4,..",
  "imgs/D2-94.png"
 ],
 [
  "Tại đoạn đường xuống dốc phải sử dụng phanh liên tục để đảm bảo an toàn.",
  0,
  "Phải dùng phanh động cơ, không được dùng phanh chân liên tục"
 ],
 [
  "Cảnh sát dơ tay ngang đồng nghĩa với chiều mũi tên là tín hiệu đèn đỏ.",
  1,
  "",
  "imgs/D2-96.png"
 ],
 [
  "Khi thấy đèn tín hiệu nhấp nháy đỏ vào buổi đêm vì không có xe hoặc lượng xe ít vẫn có thể giảm tốc độ đi qua.",
  0,
  "Đèn đỏ nhấp nháy phải dừng lại 停止"
 ],
 [
  "Tại ngã tư có tín hiệu đèn giao thông màu đỏ, nhưng có người giám sát thi công hướng dẫn nên tôi đã làm theo hướng dẫn của người giám sát công trình.",
  0,
  "Tuân theo đèn giao thông, giám sát công trình không có tác dụng"
 ],
 [
  "Khi rẽ trái chỉ cần ép sát khi cua không cần phải chú ý đến hướng của các xe khác.",
  0,
  "Cần chú ý các xe khác"
 ],
 [
  "Tại ngã 4 khi đèn tín hiệu bên kia là màu đỏ thì đèn phía trước chắc chắn là màu xanh vì vậy mình không cần phải nhìn tín hiệu đèn phía trước.",
  0
 ],
 [
  "Đai thắt lưng của dây an toàn nên thắt lỏng để quàng qua phần bụng.",
  0
 ],
 [
  "Khi bị lạc đường, chỉ nhìn vào thiết bị chỉ đường trên xe mà không cần quan sát xung quanh.",
  0
 ],
 [
  "Chỉ dẫn này biểu thị phần đường cấm không được đi vào.",
  1,
  "",
  "imgs/D2-103.png"
 ],
 [
  "Khi có hai làn xe, di chuyển vào làn trống để giao thông được thuận tiện hơn cho việc lưu thông.",
  0
 ],
 [
  "Trong trường hợp vì giao thông phía trước đang bị tắc nghẽn, mà hướng di chuyển là màu xanh nhưng vì ảnh hưởng đến giao thông nên dừng xe trước ngã tư.",
  1
 ],
 [
  "Biển báo này có nghĩa đường chỉ rộng 2,2m.",
  0,
  "Xe có chiều rộng lớn hơn mức này cấm đi qua",
  "imgs/D2-106.png"
 ],
 [
  "Trên đường có biển chỉ dẫn quy định về tốc độ tối đa thì không được vượt quá tốc độ cho phép.",
  1
 ],
 [
  "Biển này được phép rẽ trái.",
  0,
  "",
  "imgs/D2-108.png"
 ],
 [
  "Khi muốn rẽ trái, xe phải tấp càng sát vào lề trái càng tốt, đi chậm ôm theo sát mép của đường (không quan tâm quy luật vòng xuyến).",
  1
 ],
 [
  "Khi một chiếc xe muốn vượt qua, không được tăng tốc cho đến khi xe đó đã vượt qua hoàn toàn.",
  1
 ],
 [
  "Trên đường dành riêng cho xe buýt tuyến cố định, xe đạp có gắn động cơ cũng không được phép di chuyển vào làn đường này.",
  0
 ],
 [
  "Khi lái xe trong một khoảng thời gian liên tục bạn nên nghỉ giải lao sau mỗi 2 tiếng lái xe.",
  1
 ],
 [
  "Khi đi qua xe buýt đang đưa đón học sinh, bạn sau khi xác nhận an toàn thì không phải giảm tốc độ hoặc dừng lại mà cứ thế cho xe tiếp tục di chuyển.",
  0
 ],
 [
  "Tại nơi giao nhau với đường sắt có đèn tín hiệu giao thông, phương tiện được phép lưu thông theo tín hiệu của đèn.",
  1
 ],
 [
  "Sau khi uống thuốc cảm cúm, có tác dụng phụ gây buồn ngủ bạn không nên lái xe.",
  1
 ],
 [
  "Phía trước có chướng ngại vật, làn đường theo chiều ngược lại có xe tiến đến bạn đã tăng tốc để vượt chướng ngại vật trước khi xe đối diện tiến đến.",
  0
 ],
 [
  "Khi chuyển làn cần phải chờ xe phía sau đi qua mới được chuyển làn.",
  1
 ],
 [
  "Ở những khu vực có biển báo này (cấm vượt phải), các phương tiện không chỉ bị cấm băng qua đường mà còn bị cấm quay đầu, lùi xe.",
  0,
  "Biển này chỉ cấm băng qua",
  "imgs/D2-118.png"
 ],
 [
  "Khi rẽ phải, phương tiện phải di chuyển càng gần tâm đường càng tốt và chạy chậm ngay trong tâm đường giao nhau.",
  1
 ],
 [
  "Sau khi xác nhận an toàn rồi thì không cần phải tuân theo chỉ dẫn. (Khi gặp biển này nếu đi theo biển chỉ dẫn sẽ an toàn hơn, nhưng không bắt buộc phải đi theo vạch trắng nét liền)",
  0,
  "",
  "imgs/D2-120.png"
 ],
 [
  "Khi đi qua làn đường dành cho người đi bộ, rõ ràng là không thấy có người đi bộ thì giữ nguyên tốc độ và đi qua.",
  1
 ],
 [
  "Người có bằng lái xe oto thông thường được phép lái xe đạp gắn động cơ.",
  1
 ],
 [
  "Xe oto thông thường không được phép sử dụng làn đường có biển báo này, trừ những trường hợp không thể tránh khỏi như rẽ trái hoặc rẽ phải.",
  1,
  "",
  "imgs/D2-123.png"
 ],
 [
  "Biển báo chỉ đường như hình dưới đây có ý nghĩa là phía trước là đường ưu tiên.",
  1,
  "",
  "imgs/D2-124.png"
 ],
 [
  "Khi xe ưu tiên đang đến gần, không phải là khu vực giao lộ hoặc gần giao lộ thì phải tấp vào lề trái và nhường đường (bất kể hình dạng đường).",
  0,
  "Không cần phải nhất định là lề trái, lề phải cũng được"
 ],
 [
  "Khi có từ 3 làn đường xe chạy cùng chiều trở lên thì làn ngoài cùng bên phải được để trống để vượt... có thể sử dụng các làn đường xe khác nhưng trong trường hợp đó phải hạn chế tốc độ, sử dụng làn đường nơi xe chạy chậm di chuyển sang trái và xe đi nhanh hơn di chuyển sang phải (không bao gồm các loại xe đặc biệt nhỏ, các loại xe được chỉ định bằng biển báo…).",
  1
 ],
 [
  "Biển báo phía trước là khu vực an toàn.",
  0,
  "",
  "imgs/D2-127.png"
 ],
 [
  "Khi rẽ ở nút giao thông thì thời điểm bật xi nhan là 30m trước khi rẽ.",
  1,
  "Rẽ xin nhan trước 30m, chuyển làn xin nhan trước 3 giây"
 ],
 [
  "Thời điểm ra tín hiệu chuyển làn là ngay khi bạn xoay vô lăng.",
  0
 ],
 [
  "Bằng lái xe thông thường có thể lái được xe 2 bánh thông thường và xe gắn động cơ dưới 50cc.",
  0,
  "Chú ý có từ \"xe 2 bánh thông thường\" - bằng thông thường không lái được"
 ],
 [
  "Nguyên tắc đường trung tâm là khi có kí hiệu trung tâm thì phải đi về phía bên trái tính từ trung tâm đường.",
  1
 ],
 [
  "Biển này cấm đỗ xe chứ không cấm dừng xe.",
  1,
  "",
  "imgs/D2-132.png"
 ],
 [
  "Tại làn đường dành riêng cho xe buýt tuyến cố định, thì dù là lúc rẽ trái cũng không được lưu thông sang làn đó.",
  0
 ],
 [
  "Nút giao thông và khu vực gần nút giao thông là nơi hay xảy ra tai nạn, nên phải cố gắng tăng tốc và chạy qua nhanh.",
  0
 ],
 [
  "Khi người già điều khiển xe sẽ quan sát chậm và xử lý kém, nên lưu thông chú ý cấm không được áp sát hay chen ngang trừ trường hợp né tránh nguy hiểm.",
  1
 ],
 [
  "Lên và xuống dốc khuất tầm nhìn vì dễ va chạm nên không được vượt xe oto và xe máy dưới 50cc.",
  1
 ],
 [
  "Khi có nguy cơ không thể ra khỏi làn đường ưu tiên dành cho xe buýt tuyến cố định do giao thông ùn tắc thì ngay từ đầu không được lưu thông trên làn đó.",
  1
 ],
 [
  "Đối với xe số tự động, việc sử dụng phanh chia ra nhiều lần không chỉ thông báo cho phương tiện phía sau mà còn giảm thiểu tai nạn do đường trơn trượt.",
  1
 ],
 [
  "Khi rẽ trái hoặc rẽ phải đến khi kết thúc, thời gian tắt tín hiệu là 3s khi hành vi kết thúc.",
  0
 ],
 [
  "Khi đi qua nơi chắn đường tàu nên sớm thay đổi tốc độ và chạy qua 1 mạch để ngăn ngừa chết máy.",
  1
 ],
 [
  "Trên đường thiết lập làn đường ưu tiên cho xe buýt bạn đã lưu thông trên làn đó để rẽ trái.",
  1
 ],
 [
  "Biển báo này biểu thị phía trước đang thi công, nên xe không được lưu thông.",
  0,
  "Được lưu thông",
  "imgs/D2-142.png"
 ],
 [
  "Không được điều khiển xe sau khi uống rượu, nhưng uống bia có lượng cồn ít có thể điều khiển xe sau khi uống.",
  0
 ],
 [
  "Biển báo khu vực sang đường dành cho xe đạp.",
  1,
  "自転車横断帯",
  "imgs/D2-144.png"
 ],
 [
  "Khi điều khiển xe dưới 50cc chỉ cần có bằng phù hợp hoặc máy kéo không cần phải mang theo bằng lái xe.",
  0
 ],
 [
  "Tại khu vực có trẻ em đang chơi gần đường khi đi qua bạn không cần đi chậm.",
  0
 ],
 [
  "Tại đường có vạch người đi bộ qua đường vì khuất tầm nhìn bạn không nhìn rõ nên bạn phải dừng lại trước vạch xác nhận an toàn rồi qua.",
  1
 ],
 [
  "Khi gặp biển này nếu không có người đi bộ thì oto có thể đi vào.",
  0,
  "",
  "imgs/D2-148.png"
 ],
 [
  "Tại các khu vực gần góc cua, ô tô không được vượt bên phải của xe khác.",
  1
 ],
 [
  "Bạn nên giảm tốc độ trước khi vào góc cua sẽ an toàn hơn là vào cua rồi mới giảm tốc độ.",
  1
 ],
 [
  "Không được di chuyển hướng khác biển báo.",
  1,
  "",
  "imgs/D2-151.png"
 ],
 [
  "Biển báo này là đường dành riêng cho người đi bộ.",
  0,
  "",
  "imgs/D2-152.png"
 ],
 [
  "Tại nơi có biển báo này, có thể rẽ trái bất kể tín hiệu phía trước là gì.",
  0,
  "",
  "imgs/D2-153.png"
 ],
 [
  "Cấm các phương tiện có chiều rộng vượt quá giới hạn trên biển báo.",
  1,
  "",
  "imgs/D2-154.png"
 ],
 [
  "Khi không có người đi bộ có thể vào đỗ hoặc dừng xe.",
  0,
  "",
  "imgs/D2-155.png"
 ],
 [
  "Biển báo phía trước có đường dành cho người đi bộ hoặc xe đạp.",
  1,
  "",
  "imgs/D2-156.png"
 ],
 [
  "Biển báo này cho phép lấn sang phải để cua.",
  1,
  "",
  "imgs/D2-157.png"
 ],
 [
  "Biển báo này cho biết giới hạn tốc độ tối thiểu là 50km/h.",
  0,
  "",
  "imgs/D2-158.png"
 ],
 [
  "Cả 2 hình của cảnh sát đều có ý nghĩa là đèn đỏ.",
  1,
  "",
  "imgs/D2-159.png"
 ],
 [
  "Biển báo này có ý nghĩa là đường 1 chiều.",
  0,
  "",
  "imgs/D2-160.png"
 ],
 [
  "Phía trước có xe đang định vượt, bạn xác nhận an toàn và có thể tăng tốc vượt lên 2 xe phía trước.",
  0
 ],
 [
  "Người có bằng lái Karimen \"bằng lái tạm thời\", khi tập lái trên đường bắt buộc phải gắn biển tập lái như hình (đang tập lái với bằng Karimen \"bằng lái tạm thời\") vào trước và sau xe đúng nơi quy định.",
  1,
  "Chú ý từ: trước và sau = Đúng, trước hoặc sau = Sai",
  "imgs/D2-162.png"
 ],
 [
  "Biển báo này cho biết phía trước có đường trơn trượt.",
  0,
  "",
  "imgs/D2-163.png"
 ],
 [
  "Khi dừng xe ô tô tự động, thì nhấn phanh chân, giữ nguyên như thế rồi gạt phanh tay chuyển cần gạt về P là được.",
  1
 ],
 [
  "Khi đi vào ngã tư, phương tiện rẽ phải không được gây cản trở giao thông của xe đi thẳng và rẽ trái (không quan tâm quy luật vòng xuyến).",
  1,
  "Trình tự ưu tiên: Đi thẳng → Rẽ trái → Rẽ phải"
 ],
 [
  "Khi xuống đường dốc dài bạn phải kéo phanh tay và đạp phanh.",
  0
 ],
 [
  "Phương tiện không được gây cản trở phương tiện khác phía trước có thay đổi làn để rẽ trái hoặc phải, hoặc để có thể di chuyển dọc làn đường chỉ định theo biển báo hoặc vạch kẻ đường (không quan tâm quy luật vòng xuyến).",
  1
 ],
 [
  "Tại ngã tư trường hợp đèn tín hiệu giao thông ở hướng đi thẳng đang nhấp nháy vàng, quan sát các xe đang lưu thông trên đường giao nhau, chạy chậm và lưu thông.",
  0,
  "Đèn vàng nhấp nháy - chú ý quan sát - chạy bình thường"
 ],
 [
  "Trường hợp để đỗ xe vào bãi đỗ xe hướng mặt ra đường thì phải đi cắt ngang qua lề đường dành cho người đi bộ. Nếu không có người đi bộ, trước khi chạy cắt ngang thì đi chậm và xác nhận an toàn rồi đi qua.",
  0,
  "Không phải đi chậm - phải dừng lại 停止"
 ],
 [
  "Khi tới khu vực qua đường dành cho xe đạp, dù trường hợp rõ ràng không có xe đạp thì cũng phải đi chậm.",
  0,
  "Rõ ràng không có, được chạy như bình thường"
 ],
 [
  "Tại ngã tư có biển báo tạm dừng, khi tạm dừng và tiến vào, có thể di chuyển vào ngã tư trước các xe đang lưu thông qua đường giao nhau trong ngã tư.",
  0,
  "Phải nhường đường cho các xe trong ngã tư lưu thông trước"
 ],
 [
  "Biển cảnh báo phía trước có đường trơn trượt.",
  1,
  "",
  "imgs/D2-172.png"
 ],
 [
  "Biển chỉ dẫn này biểu thị phía trước có làn đường cho người đi bộ hoặc khu vực qua đường dành cho xe đạp.",
  1,
  "",
  "imgs/D2-173.png"
 ],
 [
  "Các phương tiện và xe điện không được vào khu vực được đánh dấu xác định nếu có nguy cơ có thể bị buộc phải dừng lại ở đó do các điều kiện phía trước.",
  1,
  "",
  "imgs/D2-174.png"
 ],
 [
  "Người đi bộ và xe hạng nhẹ có thể đi vào phần đường này.",
  0,
  "Chỉ có người đi bộ được đi vào",
  "imgs/D2-175.png"
 ],
 [
  "Cho biết kết thúc điều tiết giao thông theo chỉ định trên biển báo chính.",
  1,
  "",
  "imgs/D2-176.png"
 ],
 [
  "Xe có thể dừng lại an toàn khi đèn giao thông ở ngã tư chuyển sang màu vàng. Tuy nhiên, sẽ tốt hơn nếu tôi có thể vượt qua ngã tư trước khi nó chuyển sang màu đỏ, vì vậy tôi đã vượt qua một cách cẩn thận.",
  0
 ],
 [
  "Tín hiệu tay của nhân viên cảnh sát, chẳng hạn như tín hiệu trong hình này, khi đối mặt với luồng giao thông theo hướng mũi tên. Nó có ý nghĩa tương tự như tín hiệu của đèn xanh.",
  1,
  "",
  "imgs/D2-178.png"
 ],
 [
  "Dù là đường có biển báo như trong hình (cấm tất cả) thì xe đạp và người đi bộ vẫn có thể đi vào.",
  0,
  "Biển này cấm tất cả, bao gồm cả người đi bộ",
  "imgs/D2-179.png"
 ],
 [
  "Như thể hiện trong hình này, vành đai giao thông dành cho xe phía trước giao lộ được đánh dấu bằng vạch màu vàng. Tại nơi được đánh dấu, không được vượt qua vạch màu vàng và chuyển hướng, kể cả rẽ phải hoặc rẽ trái.",
  1,
  "",
  "imgs/D2-180.png"
 ],
 [
  "Sau khi hoàn thành các hành động như rẽ phải hoặc trái, hãy tắt tín hiệu xi nhan càng sớm càng tốt.",
  1
 ],
 [
  "Khi khởi hành, hãy kiểm tra độ an toàn trước khi khởi hành, sau đó đưa ra tín hiệu bằng đèn báo hướng và một lần nữa kiểm tra độ an toàn của phía trước, phía sau, bên trái và bên phải bằng gương chiếu hậu, v.v., trước khi bắt đầu.",
  1
 ],
 [
  "Khi cảnh sát giao thông ra tín hiệu tay có nghĩa khác với tín hiệu đèn giao thông ở giao lộ có đèn giao thông thì đi theo tín hiệu đèn giao thông.",
  0,
  "Ở giao lộ: cảnh sát giao thông + đèn tín hiệu → tuân theo cảnh sát. Ở giao lộ: đèn tín hiệu + người giám sát công trình → tuân theo đèn tín hiệu"
 ],
 [
  "Vì thời gian vượt kéo dài sẽ nguy hiểm nên sau khi xác nhận an toàn xung quanh và gương chiếu hậu \"qua loa\" bạn đã tăng tốc vượt lên xe phía trước.",
  0
 ],
 [
  "Khi có người đi bộ có ý định qua đường ở khu vực không có vạch qua đường bạn không cần quan tâm giữ nguyên tốc độ và đi qua.",
  0,
  "Phải dừng nhường cho người đi bộ"
 ],
 [
  "Mũi tên đèn màu xanh đang sáng. Xe oto đối diện với đèn tín hiệu này có thể rẽ phải ở nút giao thông.",
  1,
  "",
  "imgs/D2-186.png"
 ],
 [
  "Biển báo chỉ dẫn này có ý nghĩa phía trước có \"nút giao thông vòng xuyến\".",
  0,
  "Biển màu xanh mới là giao thông vòng xuyến",
  "imgs/D2-187.png"
 ],
 [
  "Độ dài khoảng cách phanh tỉ lệ với tốc độ. Do vậy nếu tốc độ tăng gấp hai lần thì khoảng cách phanh cũng dài gấp hai lần.",
  0
 ],
 [
  "Khi lưu thông qua nút giao thông khó quan sát bên trái và bên phải, dù xe của mình chạy trên đường ưu tiên cũng phải chạy chậm.",
  0,
  "Nếu mình trên đường ưu tiên thì chạy tốc độ bình thường không sao - không cần chạy chậm"
 ],
 [
  "Trường hợp cho dù các làn đường lưu thông dành cho... trước ngã tư được phân cách bằng các đường vạch vàng, khi rẽ trái phải mà cần đổi làn thì vẫn có thể vượt qua vạch vàng này.",
  0,
  "Không được vượt qua vạch vàng"
 ],
 [
  "Khi chuẩn bị rẽ phải tại ngã tư, việc di chuyển sang phía bên trái đường trước sẽ dễ dàng và an toàn hơn khi rẽ (ngoại trừ giao thông vòng xuyến).",
  0
 ],
 [
  "Vì sẽ an toàn hơn khi vượt qua trong khoảng thời gian ngắn, do vậy xác nhận trước và sau xe và làn xe chạy ngược chiều một cách đơn giản rồi tăng tốc độ vượt qua.",
  0
 ],
 [
  "Cho dù xe phía trước đang định vượt qua một chiếc xe khác, nếu vẫn chạy xe trong giới hạn tốc độ cho phép thì vẫn có thể vượt được các xe này.",
  0,
  "Cấm vượt xe khi xe đó đang vượt xe khác"
 ],
 [
  "Khi phía trước đang bị tắc nghẽn, trường hợp đèn giao thông đối diện là đèn xanh thì bắt buộc phải dừng ở trong ngã tư.",
  0,
  "Phía trước tắc thì dù đèn xanh vẫn không được vào ngã tư"
 ],
 [
  "Ở nút giao thông có vạch kẻ màu vàng vì muốn rẽ phải nên bạn đã cho xe chuyển làn và tiến vào nút giao thông.",
  0,
  "Không được dẫm vạch màu vàng"
 ],
 [
  "Khi tiến vào khu vực giao thông vòng xuyến, ưu tiên các xe đang lưu thông trong nút giao thông vòng xuyến và có thể lưu thông.",
  1
 ],
 [
  "Khi khởi động xe oto tự động, cần phải xác nhận phanh tay đã khóa hay chưa và cần số ở vị trí P.",
  1
 ],
 [
  "Khi đến gần thanh ngang chắn tàu, còi báo động vang lên nhưng do thanh ngang chắn tàu mới hạ xuống hay chưa hạ xuống hết, nên vẫn đi qua.",
  0
 ],
 [
  "Khi đến gần vạch kẻ đường dành cho người đi bộ, trường hợp rõ ràng không có người đi bộ băng qua đường, bạn có thể tiếp tục lưu thông với tốc độ như cũ mà không cần chạy chậm lại.",
  1
 ],
 [
  "Khi không thể lưu thông ở phía bên trái đường do đường đang thi công, bạn có thể đi lấn qua phía bên phải để lưu thông.",
  1
 ],
 [
  "Tại đường một chiều có 2 làn xe oto di chuyển về phía bên trái.",
  1
 ],
 [
  "Lề đường dành cho người đi bộ, khi không có người đi bộ xe oto có thể đi vào.",
  0
 ],
 [
  "Trên đường một chiều bạn phải lưu thông về bên phải.",
  0,
  "Có thể lưu thông bên phải, chứ không phải \"phải lưu thông bên phải\""
 ],
 [
  "Khi đi qua bên cạnh trẻ em đang đi bộ một mình, nhất định phải dừng lại và lưu thông an toàn.",
  0,
  "停止か徐行 (dừng hoặc đi chậm)"
 ],
 [
  "Khi dừng xe nếu không chuyển cần số về P sẽ xảy ra hiện tượng trườn xe rất nguy hiểm.",
  1
 ],
 [
  "Khi đi qua khu vực có biển báo bấm còi, sau khi đã xác nhận an toàn rồi thì có thể đi qua mà không cần bấm còi.",
  0,
  "An toàn cũng phải bấm"
 ],
 [
  "Tomare dừng lại trước vạch trắng, nếu không có vạch trắng thì phải dừng trước giao lộ (ngã tư).",
  1,
  "Chú ý: dừng trước ngã tư, chứ không phải dừng trước biển này",
  "imgs/D2-207.png"
 ],
 [
  "Vì biển báo này biểu thị có trường học, trường mẫu giáo hay đường đi học gần đó, do có nhiều trẻ em qua lại, nên cần phải lái xe cẩn thận.",
  0,
  "",
  "imgs/D2-208.png"
 ],
 [
  "Người lái xe khi xuống xe phải chú ý xác nhận an toàn phía sau là tất nhiên, ngoài ra thì người lái xe cũng phải chú ý an toàn phía sau khi người đi cùng xuống xe.",
  1
 ],
 [
  "Xe chạy ở đường có vạch kẻ (xe B) phải nhường cho xe bên trái (xe A).",
  0,
  "",
  "imgs/D2-210.png"
 ],
 [
  "Biển báo này cho biết phía trước đường giao nhau có cùng chiều rộng.",
  0,
  "",
  "imgs/D2-211.png"
 ],
 [
  "Tại đường một chiều xe máy phải di chuyển ở bên trái đường.",
  1
 ],
 [
  "Đường dành riêng cho người đi bộ ngoại trừ những người có bãi đậu xe trên vỉa hè băng qua và người có bằng lái xe đặc biệt, các phương tiện khác không được đi vào.",
  1
 ],
 [
  "Khi muốn vượt xe đang dừng trước vạch sang đường dành cho người đi bộ, bạn phải dừng lại xác nhận an toàn rồi đi chậm qua.",
  1
 ],
 [
  "Nairin là sự sai lệch giữa bánh trước và bánh sau khi rẽ trái hoặc rẽ phải. Góc rẽ hẹp độ sai lệch sẽ lớn, góc rẽ rộng sẽ ít sai lệch nên không cần chú ý.",
  0,
  "Góc lớn bé cũng cần chú ý"
 ],
 [
  "Khi gần ngã tư 2 làn đường có vạch vàng, vì rẽ phải nên đã đi qua vạch vàng.",
  0,
  "Không được rẽ qua vạch vàng"
 ],
 [
  "Khi đi qua khu vực có biển biển báo này (lấn phải để cua), phải lấn sang phải để cua.",
  0,
  "Có thể lấn sang phải, chứ không phải \"phải lấn sang phải\". (Nếu thêm điều kiện dù có xe đối diện đi tới vẫn lấn sang phải để cua → Sai)",
  "imgs/D2-217.png"
 ],
 [
  "Biển này báo hiệu phía trước có đường ngoằn nghèo.",
  1,
  "",
  "imgs/D2-218.png"
 ],
 [
  "Khi gặp biển báo này các phương tiện phải giảm tốc độ và lưu thông.",
  0,
  "Đi chậm có thể dừng ngay lập tức, không phải giảm tốc độ",
  "imgs/D2-219.png"
 ],
 [
  "Khi trên đường không có biển báo tốc độ, thì xe đạp gắn máy có thể chạy với vận tốc dưới 30 km/h.",
  1
 ],
 [
  "Khi đi qua người đi bộ và đi xe đạp nếu giữ được khoảng cách an toàn thì không cần đi chậm.",
  1
 ],
 [
  "Biển báo chỉ thị số làn đường bị giảm.",
  0,
  "Chiều rộng giảm",
  "imgs/D2-222.png"
 ],
 [
  "Khi đi qua vùng an toàn phải lái xe chậm, bất kể trong vùng an toàn có người đi bộ hay không.",
  0,
  "Khi không có người thì chạy bình thường"
 ],
 [
  "Khi muốn chuyển hướng, cần phải hết sức chú ý để không gây phiền phức cho người lái xe khác.",
  1
 ],
 [
  "Nếu có chướng ngại vật phía trước, hãy dừng lại trước chướng ngại vật đó và nhường đường cho xe đang chạy tới.",
  1
 ],
 [
  "Tôi thấy một người đi bộ đang cố gắng băng qua via hè nên dừng lại một lúc, nhưng vì đang vội nên tôi bấm còi cảnh báo và cảnh báo người đó phải cẩn thận, tôi lái xe vượt qua người đi bộ phía trước.",
  0
 ],
 [
  "Khi đạp phanh, tốt nhất trước tiên bạn nên đạp phanh nhẹ nhất có thể, sau đó đạp phanh dần dần ở mức độ cần thiết.",
  1
 ],
 [
  "Cấm vượt hoặc vượt bất kỳ phương tiện nào trong phạm vi 30 mét tính từ mặt trước của \"vạch sang đường dành cho người đi bộ\" hoặc \"vạch sang đường dành cho xe đạp\".",
  0,
  "Ngoại trừ các loại xe thô sơ 軽車両を除く"
 ],
 [
  "Khi đến gần vạch dành cho người đi bộ hoặc dải đường dành cho xe đạp mà không rõ có người đi bộ hay người đi xe đạp thì phải đi với tốc độ để có thể dừng lại ngay được.",
  1,
  "Nếu rõ ràng không có người thì chạy qua luôn không cần giảm tốc độ"
 ],
 [
  "Biển báo này cho biết ô tô có thể đi thẳng hoặc rẽ trái nhưng không được rẽ phải.",
  1,
  "",
  "imgs/D2-230.png"
 ],
 [
  "Người điều khiển xe oto phải khóa cửa và cẩn thận không để người đi cùng mở hoặc mở bất cẩn.",
  1
 ],
 [
  "Khi rẽ trái ở ngã tư, sẽ an toàn hơn nếu quay vô lăng sang phải trước rồi rẽ trái, vì lực tác động của bánh trong sẽ nhỏ hơn và sẽ an toàn hơn.",
  0
 ],
 [
  "Khi đi ngang qua một người đang chống gậy trắng hoặc vàng, bạn phải dừng lại và đi chậm.",
  0,
  "停止か徐行 (dừng hoặc đi chậm)"
 ],
 [
  "Khi đến gần ngã tư như hình bên dưới, ở nơi đường có bề rộng bằng nhau thì xe A không được phép cản trở xe B.",
  1,
  "Ưu tiên phía tay trái",
  "imgs/D2-234.png"
 ],
 [
  "Xe số tự động đã khởi động động cơ, nếu chỉ di chuyển cần số về D thì xe sẽ không thể chạy được.",
  0
 ],
 [
  "Có thể vượt xe chạy chậm hơn trên đường dốc lên dốc nếu không có biển hoặc biển cấm vượt.",
  0,
  "Lên dốc cấm vượt"
 ],
 [
  "Không cần phải giảm tốc độ khi vượt qua người đi bộ hoặc đi xe đạp nếu bạn có thể giữ khoảng cách an toàn với họ.",
  1
 ],
 [
  "Biển báo này biểu thị chiều rộng của đường bị giảm.",
  0,
  "Làn đường giảm",
  "imgs/D2-238.png"
 ],
 [
  "Đang đi trong ngã tư nhưng có xe ưu tiên đến thì ép lề trái và dừng trong ngã tư.",
  0
 ],
 [
  "Khi lưu thông ở đường có bề rộng bằng nhau thì phải ưu tiên phương tiện bên trái (không cần quan tâm đến quy định vòng xuyến).",
  1
 ]
];

// Tinh huong: scenario + 3 statements (1=Dung,0=Sai). Dung het 3 moi duoc 2 diem.
const TH_RAW = [
 {
  "scene": "Đang lái xe với tốc độ 40km/h. Phía trước có người đi xe đạp trong trạng thái loạng choạng, do vậy cần lưu ý gì khi lái xe?",
  "stmts": [
   [
    "Có thể người đi xe đạp sẽ nhận ra xe tôi đang tiến tới gần mình nên tôi cứ giữ nguyên tốc độ và lái xe vượt qua.",
    0
   ],
   [
    "Người đi xe đạp trong trạng thái loạng choạng có khả năng bị ngã nên tôi nhanh chóng tăng tốc và lái xe vượt qua.",
    0
   ],
   [
    "Có thể người đi xe đạp đang say rượu nên tôi lái xe về phía đường bên phải, khi xác nhận xe đạp không đi vào phần giữa đường thì lái xe vượt qua.",
    1
   ]
  ],
  "img": "imgs/TH-1.png"
 },
 {
  "scene": "Đang lái xe với tốc độ 30km/h. Trong khu vực có sương mù thì cần lưu ý gì khi lái xe?",
  "stmts": [
   [
    "Trong khu vực có sương mù có khả năng có người đi bộ xuất hiện đột ngột nên giảm tốc độ và bấm còi khi cần thiết.",
    1
   ],
   [
    "Giảm tốc độ đột ngột có thể khiến cho xe sau đâm vào xe mình, do vậy nhấn phanh chia thành nhiều lần.",
    1
   ],
   [
    "Khu vực có sương mù thì tầm nhìn bị hạn chế khá nhiều do vậy nếu có đèn dành cho khi vào khu vực sương mù thì bật đèn lên nếu không có thì nhanh chóng bật đèn pha, giảm tốc độ và lưu thông.",
    1
   ]
  ],
  "img": "imgs/TH-2.png"
 },
 {
  "scene": "Đang lái xe với tốc độ 40km/h. Khi xe đối diện chạy vượt qua nhau với tình trạng đang bật đèn pha thì cần lưu ý gì khi lái xe?",
  "stmts": [
   [
    "Do đèn pha của xe đối diện chói nên cần chuyển hướng nhìn hơi chếch về phía phải để tránh bị lóa mắt.",
    0
   ],
   [
    "Đèn pha của xe đối diện làm lóa mắt và có khả năng không kịp bẻ lái cua dẫn tới đâm vào thanh rào chắn do vậy cần giảm tốc độ ngay lập tức.",
    1
   ],
   [
    "Do đèn pha của xe đối diện chói nên khi đi ngang qua, tôi cũng bật đèn pha.",
    0
   ]
  ],
  "img": "imgs/TH-3.png"
 },
 {
  "scene": "Đang lái xe với tốc độ 40km/h. Đằng sau 2 ô tô đang dừng có xe buýt tiến lại gần, khi lái xe cần lưu ý gì?",
  "stmts": [
   [
    "Vì xe buýt phải đảm bảo an toàn cho hành khách nên không lái xe cẩu thả và sẽ nhường cho mình vượt qua trước, do vậy không đợi và tăng tốc đi vượt qua.",
    0
   ],
   [
    "Vì xe buýt có thể lấn sang đường trung tâm nên chạy sát đường trung tâm để xe buýt không thể lấn sang.",
    0
   ],
   [
    "Từ phía sau của xe đang đỗ phía trước có thể người đi bộ qua đường, do vậy cần chú ý phía sau của xe đang đỗ và động thái của xe buýt, vừa giảm tốc độ vừa đi qua.",
    1
   ]
  ],
  "img": "imgs/TH-4.png"
 },
 {
  "scene": "Đang lái xe với tốc độ 80km/h trên đường cao tốc. Xe cỡ lớn phía sau đang tăng tốc tiến lại gần. Cần lưu ý gì khi lái xe?",
  "stmts": [
   [
    "Xe phía trước bên phải có khả năng chuyển gấp sang làn trái hay xe máy phía trước bên trái có khả năng chuyển gấp sang làn phải, do vậy giữ nguyên tốc độ, vừa giữ khoảng cách với xe ô tô phía trước vừa lưu thông.",
    1
   ],
   [
    "Nếu giữ khoảng cách với xe phía trước, có khả năng bị xe khác tạt đầu xe mình, do đó tăng tốc để giảm khoảng cách với xe phía trước.",
    0
   ],
   [
    "Xe cỡ lớn phía sau đang tăng tốc tiến lại gần. Do vậy chuyển sang làn trái đang trống, vừa giữ khoảng cách với xe máy vừa lưu thông.",
    1
   ]
  ],
  "img": "imgs/TH-5.png"
 },
 {
  "scene": "Giảm tốc độ xuống 20km/h khi rẽ trái ở ngã tư thì nên lưu ý điều gì khi lái xe?",
  "stmts": [
   [
    "Khi lái xe tại phần đường dành cho người đi bộ phía bên trái, vì có người đi bộ qua đường từ 2 phía nên để tránh việc làm cản trở việc đi lại của người đi bộ, tôi rẽ trái ở phần trung tâm của đường.",
    0
   ],
   [
    "Do có người đi bộ qua đường, để người đi bộ an tâm đi qua đường, thì tiến và dừng lại trước phần đường cho người đi bộ, đợi người đi bộ đi qua và rẽ trái.",
    1
   ],
   [
    "Có khả năng xe đối diện cố tình rẽ phải nên tôi tăng tốc trước và lái xe rẽ trái trước.",
    0
   ]
  ],
  "img": "imgs/TH-6.png"
 },
 {
  "scene": "Trong khu đường có rào chắn đường sắt (踏切), độ rộng đường hẹp, phía trước có xe tải đối diện. Cần lưu ý gì khi lái xe?",
  "stmts": [
   [
    "Trong khu đường có rào chắn đường sắt, độ rộng của đường không đủ rộng nên để đi vượt qua xe tải đối diện thì sau khi xe trước vượt qua, xe mình không dừng lại mà tiếp tục đi vào bên trong khu vực rào chắn đường sắt.",
    0
   ],
   [
    "Sau khi xe trước di chuyển thì tiến tới trước rào chắn đường sắt, dừng lại và dùng tai với mắt xác nhận an toàn.",
    1
   ],
   [
    "Sau khi xe trước vượt qua khu đường có rào chắn đường sắt, phải dừng lại chờ ở phía trước rào chắn đường sắt cho tới khi xác nhận đủ chỗ trống cho xe mình có thể dừng an toàn ở phần phía trước ở phía bên kia của thanh ngang.",
    1
   ]
  ],
  "img": "imgs/TH-7.png"
 },
 {
  "scene": "Đang lái xe trước khu đường có thanh ngang chắn tàu, sau khi tạm dừng thì cần lưu ý gì khi lái xe?",
  "stmts": [
   [
    "Đường có thanh ngang chắn tàu mấp mô, có khả năng bị mất lái nên tôi nắm chặt tay lái và tiến vào.",
    1
   ],
   [
    "Do đường có thanh ngang chắn tàu mấp mô và xe đối diện có thể lấn sang phần giữa đường, vừa chú ý động thái của xe đó vừa tránh xe bị trật bánh nên cố gắng lái vào phần giữa đường và tiến vào.",
    1
   ],
   [
    "Do đường có thanh ngang chắn tàu mấp mô không thể ngừng xe giữa chừng nên nhanh chóng đổi số tăng tốc chạy thẳng qua.",
    0
   ]
  ],
  "img": "imgs/TH-8.png"
 },
 {
  "scene": "Đang lái xe với tốc độ 40km/h, phía trước có xe tắc xi và người đi bộ vẫy tay gọi xe. Cần lưu ý gì khi lái xe?",
  "stmts": [
   [
    "Giảm tốc độ đột ngột có thể làm xe sau đâm vào xe mình, do vậy tăng tốc và vượt xe tắc xi.",
    0
   ],
   [
    "Người đi bộ vẫy tay gọi tắc xi nên có khả năng xe sẽ dừng đột ngột do vậy cần giảm tốc độ và giữ khoảng cách giữa hai xe.",
    1
   ],
   [
    "Do xe tắc xi không bật xi nhan rẽ trái mà phía sau đang có xe chạy đến nên chắc không có khả năng xe tắc xi dừng đột ngột do đó tôi giữ nguyên tốc độ và lưu thông.",
    0
   ]
  ],
  "img": "imgs/TH-9.png"
 },
 {
  "scene": "Trước khu vực có rào chắn đường sắt, phía sau có xe tải, phía trước có xe đang chạy ngược chiều. Cần lưu ý gì khi lái xe?",
  "stmts": [
   [
    "Vì không thể quan sát hết tình hình giao thông phía trước nên trước khi cho xe tiến vào nơi chắn tàu cần tạm dừng xác nhận xem phía bên kia có còn khoảng trống cho xe mình hay không.",
    1
   ],
   [
    "Dù có xe phía trước đang tiến đến, nhưng bạn cũng không nên di chuyển quá sát về phần đường bên trái.",
    1
   ],
   [
    "Vì có xe tải đang di chuyển đằng sau xe đang chạy ngược chiều phía trước nên có khả năng đường trong nơi chắn tàu sẽ không đủ rộng để có thể tránh xe tải, do đó bạn đã di chuyển nối đuôi theo xe phía trước, nhanh chóng di chuyển qua nơi chắn tàu.",
    0
   ]
  ],
  "img": "imgs/TH-10.png"
 },
 {
  "scene": "Đang lái xe máy trong đường hầm có khúc cua, xe đối diện đang tới gần, xe phía trước có khả năng dừng trong khúc cua. Cần lưu ý gì khi lái xe?",
  "stmts": [
   [
    "Xe đối diện đang tới gần, xe phía trước có khả năng sẽ dừng trong khoảng góc cua, nên tôi giảm tốc độ vừa quan sát đồng thời 2 xe đó và lưu thông.",
    1
   ],
   [
    "Xe phía trước và xe đối diện do đi vượt qua nhau nên xe trước có thể lùi xe. Do vậy tôi giữ khoảng cách giữa 2 xe và dừng xe.",
    1
   ],
   [
    "Tuy giữa 2 xe phía trước có cột điện, có khoảng trống nhưng việc lưu thông tại chỗ đó nguy hiểm nên tôi giữ khoảng cách giữa 2 xe và lưu thông.",
    1
   ]
  ],
  "img": "imgs/TH-11.png"
 },
 {
  "scene": "Đang lái xe với tốc độ 80km/h trên đường cao tốc. Cần lưu ý gì khi lái xe?",
  "stmts": [
   [
    "Xe của mình có khả năng đang ở vị trí góc chết của gương hậu xe bên phải do vậy ta giảm ga và ra khỏi góc chết.",
    1
   ],
   [
    "Xe chạy đường dài dễ bị rơi vào tình trạng chạy quá tốc độ nên vừa lưu thông vừa nhìn đồng hồ tốc độ để xác nhận tốc độ.",
    1
   ],
   [
    "Do tình hình giao thông phía trước của xe tải không thể nhìn thấy nên vừa lưu thông vừa giữ thêm khoảng cách giữa 2 xe dài hơn.",
    1
   ]
  ],
  "img": "imgs/TH-12.png"
 }
];

const SET_SIMPLE_IDX = [[18,124,380,249,360,80,271,132,227,32,37,293,333,82,155,118,95,74,9,144,247,166,136,196,320,259,190,315,364,204,386,133,370,366,351,211,29,280,283,169,357,143,246,116,46,85,170,88,125,407,22,401,406,346,56,73,242,185,62,413,330,367,265,231,76,180,164,67,148,399,245,140,390,218,207,345,221,254,369,47,343,44,322,200,376,83,110,340,342,279],[23,87,119,294,187,253,140,109,120,195,3,250,10,48,396,274,400,317,15,126,408,298,192,86,299,338,99,181,101,363,70,387,7,102,325,17,258,25,64,378,219,2,60,268,398,246,214,288,39,105,205,381,393,421,209,114,411,63,45,131,243,344,264,50,33,52,308,77,113,266,374,177,103,295,349,26,375,300,313,230,112,154,156,30,220,276,287,252,292,347],[171,229,249,242,186,183,90,392,123,361,38,179,96,342,339,296,162,84,319,328,285,271,57,356,416,330,216,329,174,236,78,213,383,379,94,358,23,175,67,389,153,291,127,331,215,5,145,302,353,384,0,13,176,193,188,185,306,225,260,184,137,278,71,189,352,182,355,385,350,51,163,303,422,410,318,241,372,92,147,334,194,203,382,234,368,35,222,42,201,423],[273,413,43,128,20,223,240,202,75,19,418,419,141,332,208,362,149,106,283,158,305,191,121,289,409,199,277,326,348,212,115,58,108,41,232,14,104,377,36,89,173,98,11,257,373,233,72,323,1,135,111,405,292,403,314,165,324,310,269,311,66,407,397,359,8,204,65,354,394,159,297,87,49,157,16,167,425,424,282,61,54,161,301,267,139,261,312,118,210,420],[197,307,391,198,402,226,121,81,59,321,34,53,107,97,238,304,172,377,388,178,415,244,151,27,239,336,21,24,12,404,15,262,251,412,284,263,237,129,224,256,228,339,217,417,150,168,365,286,31,117,146,91,130,341,335,309,290,327,142,371,270,210,272,55,79,134,204,219,93,395,122,100,138,316,275,40,206,4,152,248,160,255,28,69,337,6,281,235,414,68]];
const SET_TH_IDX = [[1,4,10,2,7],[1,6,3,2,8],[4,7,11,5,3],[4,11,9,10,5],[0,6,7,10,11]];
