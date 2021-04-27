import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fontStyle } from 'html2canvas/dist/types/css/property-descriptors/font-style';
import { StringValueToken } from 'html2canvas/dist/types/css/syntax/tokenizer';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute) { }

  pageContent: String;
  pageHeader: String;
  pageImg: String;
  pageHeaderImg: String;
  listContent: Array<String>;

  ngOnInit(): void {
    if (this.activateRoute.snapshot.params['id'] == 1) {
      this.pageHeader = "BẢO HIỂM TRỄ CHUYẾN BAY";
      this.pageImg = "https://paa.vn/wp-content/uploads/2019/11/tre-chuyen-bay.jpg";
      this.pageHeaderImg = "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2020/07/co-nen-mua-bao-hiem-khi-mua-ve-may-bay-khong-2.jpg";
      this.pageContent =
        "Bạn đang có dự định du lịch,công tác trong thời gian tới? Chắc hẳn bạn đã có 1 vali những bộ cánh để lên hình thật phong cách, hay những chiếc camera xịn xò lưu giữ khoảnh khắc đẹp trong suốt hành trình…Trước khi khởi hành, hãy chắc chắn chuyến đi của bạn sẽ được trọn vẹn bằng cách bỏ túi bộ đôi <b>Bảo hiểm Du lịch và Bảo hiểm trễ chuyến bay</b> với những quyền lợi siêu hấp dẫn nhé.</br><br/>"
        + "<b>1</b>-Được thiết kế phù hợp với từng khả năng tài chính và nhu cầu của khách hàng, với quyền lợi bảo hiểm đa dạng, phạm vi bảo vệ toàn diện, bạn và gia đình cùng với tất cả những người cùng tham gia chuyến hành trình sẽ an tâm tuyệt đối cả về tính mạng và tài sản trước mọi rủi ro không lường trước.</br><br/>"
        + "<b>A-Bảo hiểm Trễ chuyến bay Flight Easy</b> </br>Bạn sẽ làm gì nếu chỉ cách vài giờ khởi hành mà nhận được thông báo Delay từ hãng hàng không? Đơn giản thôi, hãy sắp xếp lại công việc của mình trong lúc chờ đợi, và vui vẻ nhận ngay “ting ting” 888.000 VNĐ vào tài khoản của bạn với Bảo hiểm trễ chuyến của Bảo Việt. Chúng tôi sẽ giúp bạn bù đắp phần nào tổn thất từ những bất tiện do trễ chuyến gây ra.<br/>"
        + "<br/>Với phí bảo hiểm chỉ 35,000 VNĐ, nhận ngay mức bồi thường 888.000 VNĐ khi phải chờ trên 2h đồng hồ liên tục.</br><br/>"
        + "Bồi thường trực tuyến đơn giản, KH nhận tiền sau 5p hoàn thành thủ tục.</br><br/>"
        + "<b>B-Bảo hiểm du lịch Travel Easy:</b></br>Với mức phí bảo hiểm chỉ từ 70.000 VNĐ, hành trình của bạn sẽ được bảo vệ để an tâm trọn vẹn trước mọi rủi ro không lường trước với hạn mức trách nhiệm bảo hiểm tới 400 triệu đồng. Quyền lợi bảo hiểm đa dạng, phạm vi bảo vệ toàn diện, hãy đăng ký tham gia ngay Bảo hiểm du lịch Travel Easy chỉ sau vài Click chuột.<br/></br>Phạm vi lãnh thổ Việt Nam.<br/></br>Quyền lợi bảo hiểm chính của sản phẩm gồm:Tai nạn cá nhân : lên tới 400.000.000VND/người.</br></br>Vận chuyển y tế cấp cứu : giá trị không giới hạn.</br></br>"
    } else if (this.activateRoute.snapshot.params['id'] == 2) {
      this.pageHeader = "BẢO HIỂM DU LỊCH";
      this.pageImg = "https://www.baoviet.com.vn/insurance/Uploads/Library/Images/SP02071814_36469425_185869765427431_2580449388325240832_n.jpg";
      this.pageHeaderImg = "https://www.baoviet.com.vn/insurance/Uploads/Library/Images/SP02071814_36469425_185869765427431_2580449388325240832_n.jpg";
      this.pageContent =
        "Bảo hiểm du lịch Việt Nam là sản phẩm bảo hiểm dành cho những khách du lịch là người Việt Nam hoặc người nước ngoài đang sinh sống tại Việt Nam đi du lịch, tham quan các địa danh du lịch trong phạm vi nước Việt Nam.<br/><br/>"
        + "Trong những chuyến du lịch luôn có khả năng xảy ra những rủi ro tai nạn giao thông, tai nạn trong quá trình đi lại tham gia các hoạt động tại địa điểm du lịch gây thương tật về thân thể, sức khỏe, thậm chí có thể nguy hại tới tính mạng.<br/><br/>"
        + "Nhưng với sản phẩm bảo hiểm du lịch Việt Nam, khách du lịch có thể hoàn toàn chủ động lựa chọn các mức bồi thường tối đa cho mình từ <b>100 triệu đồng</b> cho tới <b>500 triệu đồng</b> để bảo vệ bản thân trong suốt hành trình của mình với mức phí bảo hiểm hết sức hợp lý, chỉ từ <b>17.000 đồng/người/ngày</b>.<br/><br/>"
        + "So với các chi phí khác của chuyến du lịch, chi phí bảo hiểm có thể coi là thấp nhất và nhưng mang lại những quyền lợi rất lớn và cần thiết khi không may rủi ro xảy ra. Bạn muốn đảm bảo mình luôn an toàn để yên tâm tận hưởng chuyến đi? Hãy cho phép chúng tôi là người bạn đồng hành, người luôn đứng đằng sau khi bạn cần đến sự trợ giúp nhất.</br><br/>"
    } else if (this.activateRoute.snapshot.params['id'] == 3) {
      this.pageHeader = "BẢO HIỂM UNG THƯ";
      this.pageImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf6uJMe0o6AzoSkR-G9kv6BL7_-bCsLdQNbg&usqp=CAU";
      this.pageHeaderImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf6uJMe0o6AzoSkR-G9kv6BL7_-bCsLdQNbg&usqp=CAU";
      this.pageContent =
        "Bên cạnh những ảnh hưởng về thể chất và tinh thần, những người bị chẩn đoán mắc bệnh ung thư thường phải đối mặt với những khó khăn về kinh tế. Hơn lúc nào hết, họ cần có thêm chi phí hỗ trợ điều trị, chi trả tiền thuốc và các khoản chi phí không tên khác. Sản phẩm bảo hiểm bệnh ung thư là một giải pháp tối ưu, giảm bớt gánh nặng cho khách hàng.<br/><br/>"
        + "<b>1.Ưu điểm nổi bật của sản phẩm</b><br/>-Quyền lợi bảo hiểm được thanh toán theo khoản trọn gói cho khách hàng, giúp khách hàng chủ động tài chính đúng vào thời điểm họ cảm thấy có ít lựa chọn.<br/><br/>"
        + "- Quyền lợi bảo hiểm được chi trả ngay sau lần chuẩn đoán đầu tiên khi khách hàng cần đến nhất.<br/><br/>"
        + "- Quyền lợi bảo hiểm được đảm bảo tự động tái tục theo chu kỳ 5 năm mà không cần thẩm định gì thêm.<br/><br/>"
        + "- Phí bảo hiểm hấp dẫn với thủ tục tham gia đơn giản và thuận tiện.<br/><br/>"
        + "- Phí bảo hiểm hấp dẫn với thủ tục tham gia đơn giản và thuận tiện.<br/><br/>"
        + "- Phí bảo hiểm được thanh toán trong suốt thời hạn của hợp đồng bảo hiểm và được tái tục hàng năm.<br/><br/>"
        + "2. Quyền lợi của sản phẩm Bảo hiểm bệnh ung thư<br/><br/>"
        + "<b>- Quyền lợi bảo hiểm bệnh ung thư:</b> tối đa lên tới 1 tỷ đồng.<br/><br/>"
        + "<b>- Quyền lợi trợ cấp nằm viện:</b> tối đa 2 triệu đồng/ngày.<br/><br/>"
        + "<b>- Quyền lợi tử vong do bệnh ung thư:</b> tối đa 50 triệu đồng.<br/><br/>"
        + "<b>- Quyền lợi tử vong do tai nạn:</b> tối đa 50 triệu đồng.<br/><br/>"
        + "- Các quyền lợi bảo hiểm độc lập nhau với các lựa chọn số tiền bảo hiểm tham gia hấp dẫn.<br/><br/>"
        + "3. Điều kiện tham gia bảo hiểm<br/><br/>"
        + "<b>- Đối tượng tham gia:</b> là bên mua bảo hiểm phù hợp với quy định của Bảo hiểm Bảo Việt.<br/><br/>"
        + "<b>- Tuổi tham gia bảo hiểm:</b> ùy vào đối tượng tham gia, tuổi tham gia có thể từ 16 tuổi đến 55 tuổi (tái tục đến 65 tuổi).<br/><br/>"
        + "<b>- Số tiền bảo hiểm: </b>  250 triệu đồng, 500 triệu đồng và 1 tỷ đồng.<br/><br/>"
        + "<b>- Thời hạn bảo hiểm:</b> Theo chu kỳ 5 năm và tự động tái tục hàng năm.<br/><br/>"
        + "<b>-  Phí bảo hiểm:</b> Tính theo độ tuổi và áp dụng cùng khung tỷ lệ phí theo định kỳ 5 năm.<br/><br/>"
        + "- Các quyền lợi bảo hiểm độc lập nhau với các lựa chọn số tiền bảo hiểm tham gia hấp dẫn.<br/><br/>"
    } else if (this.activateRoute.snapshot.params['id'] == 4) {
      this.pageHeader = "BẢO HIỂM XE MÁY";
      this.pageImg = "https://static.tapchitaichinh.vn/images/upload/duongthanhhai/05252020/bao-hiem-xe-may-an-toan-4-5079.jpg";
      this.pageHeaderImg = "https://static.tapchitaichinh.vn/images/upload/duongthanhhai/05252020/bao-hiem-xe-may-an-toan-4-5079.jpg";
      this.pageContent =
        "Chiếc xe máy là người bạn đồng hành không thể thiếu trong mỗi gia đình người Việt. Tham gia BaoViet MotorCare - Bảo hiểm Xe máy của Bảo Việt (bao gồm bảo hiểm trách nhiệm dân sự chủ xe và bảo hiểm tai nạn người ngồi trên xe) với một khoản chi phí nhỏ chỉ từ 66.000 đồng, bạn đã có thể bảo vệ cho chiếc xe và người thân khi tham gia giao thông.</br><br/>"
        + "<b>1. Gói bảo hiểm dành cho xe máy bao gồm:</b><br/><br/>"
        + "- Bảo hiểm trách nhiệm dân sự bắt buộc của chủ xe.<br/><br/>"
        + "- Bảo hiểm tai nạn người ngồi trên xe.<br/><br/>"
        + "<b>2. Quyền lợi bảo hiểm:</b><br/><br/>"
        + "Tham gia Gói bảo hiểm toàn diện xe máy, khách hàng sẽ được bồi thường:<br/><br/>"
        + "- Thiệt hại về thân thể, tính mạng và tài sản đối với bên thứ ba do xe gây ra.<br/><br/>"
        + "- Thiệt hại về thân thể đối với người điều khiển xe và người ngồi trên xe bị tai nạn khi đang ở trên xe, lên xuống xe trong quá trình xe tham gia giao thông.<br/><br/>"
    } else {
      this.pageHeader = "BẢO HIỂM NHÂN THỌ";
      this.pageImg = "https://baohiemnhantholife.com/wp-content/uploads/2019/08/bao-hiem-nhan-tho-la-gi-2-1280x720.jpeg";
      this.pageHeaderImg = "https://baohiemnhantholife.com/wp-content/uploads/2019/08/bao-hiem-nhan-tho-la-gi-2-1280x720.jpeg";
      this.pageContent =
        "</br>"
        + "<b>I. Bảo hiểm nhân thọ là gì?</b><br/><br/>"
        + "Bảo hiểm nhân thọ là sản phẩm của các công ty bảo hiểm nhằm bảo vệ con người trước những rủi ro liên quan đến sức khỏe, thân thể, tính mạng. Đơn giản là người tham gia thỏa thuận và ký kết hợp đồng bảo hiểm với công ty bảo hiểm về việc sẽ đóng đúng những khoản phí đều đặn vào quỹ dự trữ tài chính do công ty bảo hiểm quản lý để được chi trả số tiền nhất định khi không may gặp rủi ro hoặc đến thời điểm đáo hạn.<br/><br/>"
        + "<b>II. Các loại hình bảo hiểm nhân thọ</b><br/><br/>"
        + "Bảo hiểm sinh kỳ là nghiệp vụ bảo hiểm cho trường hợp người được bảo hiểm sống đến một thời hạn nhất định, theo đó doanh nghiệp bảo hiểm phải trả tiền bảo hiểm cho người thụ hưởng, nếu người được bảo hiểm vẫn sống đến thời hạn được thoả thuận trong hợp đồng bảo hiểm.<br/><br/>"
        + "Bảo hiểm tử kỳ là nghiệp vụ bảo hiểm cho trường hợp người được bảo hiểm chết trong một thời hạn nhất định, theo đó doanh nghiệp bảo hiểm phải trả tiền bảo hiểm cho người thụ hưởng, nếu người được bảo hiểm chết trong thời hạn được thoả thuận trong hợp đồng bảo hiểm.<br/><br/>"
        + "Bảo hiểm trả tiền định kỳ là nghiệp vụ bảo hiểm cho trường hợp người được bảo hiểm sống đến một thời hạn nhất định; sau thời hạn đó doanh nghiệp bảo hiểm phải trả tiền bảo hiểm định kỳ cho người thụ hưởng theo thoả thuận trong hợp đồng bảo hiểm.<br/><br/>"
        + "Bảo hiểm hỗn hợp là nghiệp vụ bảo hiểm kết hợp bảo hiểm sinh kỳ và bảo hiểm tử kỳ.<br/><br/>"
        + "Bảo hiểm trọn đời là nghiệp vụ bảo hiểm cho trường hợp người được bảo hiểm chết vào bất kỳ thời điểm nào trong suốt cuộc đời của người đó.” (trích Khoản 12 - Điều 3 - Luật kinh doanh bảo hiểm)<br/>"
        + "<b>III. Hiểu đúng về bảo hiểm nhân thọ với 4 điều sau:</b><br/><br/>"
        + "1. Mục đích chính là bảo vệ trước rủi ro chứ không phải tiết kiệm sinh lời <br/><br/>"
        + "2. Là kênh tài chính dài hạn để chuẩn bị trước cho tương lai <br/>"
        + "3. Chỉ bảo vệ trước rủi ro không lường trước chứ không phải là rủi ro có sẵn <br/><br/>"
        + "4. Không phải bảo vệ trước " + "tất tần tật" + " các loại rủi ro<br/><br/>"

    }

  }
}
