//----------------- Hàm xử lý dữ liệu sách cho Sach.html ------------------//

//Danh sách sách
const danhSach = {
    1: {
        category: "Truyện tranh",
        title: "Chuyện Con Mèo Dạy Hải Âu Bay",
        main_image: "../../Assest/Book/chuyen_con_meo_day_hai_au_bay_tai_ban_2017_1_2018_12_28_22_51_18.webp",
        small_images: [
            "../../Assest/Book/chuyen_con_meo_day_hai_au_bay_tai_ban_2017_1_2018_12_28_22_51_18.webp",
            "../../Assest/Book/chuyen_con_meo_day_hai_au_bay_tai_ban_2017_1_2018_12_28_22_51_18.webp",
            "../../Assest/Book/chuyen_con_meo_day_hai_au_bay_tai_ban_2017_1_2018_12_28_22_51_18.webp",
            "../../Assest/Book/chuyen_con_meo_day_hai_au_bay_tai_ban_2017_1_2018_12_28_22_51_18.webp",
        ],
        author: "Luis Sepulveda",
        publisher: "NXB Hội Nhà Văn",
        censorship: "Bộ văn hoá Việt Nam",
        cover_type: "Bìa mềm",
        price: "88.000đ",
        product_code: "97860437753222",
        supplier: "Cty Nhân Trí Việt",
        translator: "Phương Huyên",
        publish_year: "2023",
        page_count: "141",
        form: "Bìa Mềm",
        description: [
            "Chuyện Con Mèo Dạy Hải Âu Bay",
            "• Cô hải âu Kengah bị nhấn chìm trong váng dầu – thứ chất thải nguy hiểm mà những con người xấu xa bí mật đổ ra đại dương. Với nỗ lực đầy tuyệt vọng, cô bay vào bến cảng Hamburg và rơi xuống ban công của con mèo mun, to đùng, mập ú Zorba. Trong phút cuối cuộc đời, cô sinh ra một quả trứng và con mèo mun hứa với cô sẽ thực hiện ba lời hứa chừng như không tưởng với loài mèo: Không ăn quả trứng, Chăm sóc cho tới khi nó nở, Dạy cho con hải âu bay.",
            "• Lời hứa của một con mèo cũng là trách nhiệm của toàn bộ mèo trên bến cảng, bởi vậy bè bạn của Zorba bao gồm ngài mèo Đại Tá đầy uy tín, mèo Secretario nhanh nhảu, mèo Einstein uyên bác, mèo Bốn Biển đầy kinh nghiệm đã chung sức giúp nó hoàn thành trách nhiệm. Tuy nhiên, việc chăm sóc, dạy dỗ một con hải âu đâu phải chuyện đùa, sẽ có hàng trăm rắc rối nảy sinh và cần có những kế hoạch đầy linh hoạt được bàn bạc kỹ càng…",
            "• Chuyện con mèo dạy hải âu bay là kiệt tác dành cho thiếu nhi của nhà văn Chi Lê nổi tiếng Luis Sepúlveda – tác giả của cuốn Lão già mê đọc truyện tình đã bán được 18 triệu bản khắp thế giới. Tác phẩm không chỉ là một câu chuyện ấm áp, trong sáng, dễ thương về loài vật mà còn chuyển tải thông điệp về trách nhiệm với môi trường, về sự sẻ chia và yêu thương cũng như ý nghĩa của những nỗ lực – “Chỉ những kẻ dám mới có thể bay”.",
        ],
    },
    2: {
        category: "Sách nước ngoài",
        title: "Đắc Nhân Tâm",
        main_image: "../../Assest/Book/dnt.webp",
        small_images: [
            "../../Assest/Book/dnt.webp",
            "../../Assest/Book/dnt.webp",
            "../../Assest/Book/dnt.webp",
            "../../Assest/Book/dnt.webp",
        ],
        author: "Dale Carnegie",
        publisher: "Văn Hoá Thông Tin",
        censorship: "Bộ văn hoá Việt Nam",
        cover_type: "Bìa mềm",
        price: "112.000 đ",
        product_code: "8935088526277",
        supplier: "Cty Nhân Trí Việt",
        translator: "Minh Đức",
        publish_year: "2023",
        page_count: "141",
        form: "Bìa Mềm",
        description: [
            "Đắc nhân tâm của Dale Carnegie là quyển sách nổi tiếng nhất, bán chạy nhất và có tầm ảnh hưởng nhất của mọi thời đại...",
            "• Đắc Nhân Tâm là nghệ thuật thu phục lòng người, là làm cho tất cả mọi người yêu mến mình. `Đắc nhân tâm` và cái Tài trong mỗi người chúng ta. `Đắc Nhân Tâm` trong ý nghĩa đó cần được thụ đắc bằng sự hiểu rõ bản thân, thành thật với chính mình, hiểu biết và quan tâm đến những người xung quanh để nhìn ra và khơi gợi những tiềm năng ẩn khuất nơi họ, giúp họ phát triển lên một tầm cao mới. Đây chính là nghệ thuật cao nhất về con người và chính là ý nghĩa sâu sắc nhất đúc kết từ những nguyên tắc vàng của Dale Carnegie.","Tác phẩm có sức lan toả vô cùng rộng lớn – dù  bạn đi đến bất cứ đâu, bất kỳ quốc gia nào cũng đều có thể nhìn thấy. Tác phẩm được đánh giá là cuốn sách đầu tiên và hay nhất trong thể loại này, có ảnh hưởng thay đổi cuộc đời đối với hàng triệu người trên thế giới. ","Sách đã được chuyển ngữ sang hầu hết các thứ tiếng trên thế giới và có mặt ở hàng trăm quốc gia. Đây là cuốn sách liên tục đứng đầu danh mục sách bán chạy nhất do thời báo NewYork Times bình chọn suốt 10 năm liền.",
        ],
    },
    3: {
        category: "Truyện tranh",
        title: "Frieren - Pháp Sư Tiễn Táng: Tập 1",
        main_image: "../../Assest/Book/friren.webp",
        small_images: [
            "../../Assest/Book/friren.webp",
            "../../Assest/Book/friren.webp",
            "../../Assest/Book/friren.webp",
            "../../Assest/Book/friren.webp",
        ],
        author: "Kanehito Yamada",
        publisher: "Kim Đồng",
        censorship: "Bộ văn hoá Việt Nam",
        cover_type: "Bìa mềm",
        price: "77.200 đ",
        product_code: "8935352602928",
        supplier: "Cty Nhân Trí Việt",
        translator: "Minh Đức",
        publish_year: "2020",
        page_count: "141",
        form: "Bìa Mềm",
        description: [
            "Frieren - Pháp Sư Tiễn Táng - Tập 1 ",
            "• Sau khi đánh bại Quỷ vương, những người hùng đã sống ra sao? Là một yêu tinh nên cuộc sống của nàng pháp sư Frieren cũng khác so với 3 người bạn của mình, cô cảm nhận được điều gì trong thế giới ấy? Những người ở lại đã trải qua những gì trong chuyến đi để hoàn thành tâm nguyện của người đã khuất? Tất cả đều được bắt đầu từ “Hồi kết của cuộc phiêu lưu”, một câu chuyện hậu phiêu lưu về “lẽ sống” của những anh hùng!","Nhân vật phát triển sâu sắc được nhiều người đánh giá là có chiều sâu và mang một ý nghĩa đặc biệt đại diện cho tính cách từng nhân vật","Tình tiết bất ngờ và khó đoán: Mùa 11 hứa hẹn mang đến nhiều tình tiết bất ngờ, khiến người xem không thể rời mắt khỏi màn hình. Những bí ẩn dần được hé lộ, tạo nên sự hấp dẫn và lôi cuốn.",
        ],
    },
    4: {
        category: "Sách giáo khoa",
        title: "Giáo trình Lịch Sử Đảng CS Việt Nam",
        main_image: "../../Assest/Book/lsd.webp",
        small_images: [
            "../../Assest/Book/lsd.webp",
            "../../Assest/Book/lsd.webp",
            "../../Assest/Book/lsd.webp",
            "../../Assest/Book/lsd.webp",
        ],
        author: "Nhiều Tác Giả",
        publisher: "NXB Chính Trị Quốc Gia",
        censorship: "NXB Chính Trị Quốc Gia",
        cover_type: "Bìa mềm",
        price: "43.000 đ",
        product_code: "9786045704790",
        supplier: "NXB Chính Trị Quốc Gia",
        translator: "", 
        publish_year: "2003",
        page_count: "210",
        form: "Bìa Mềm",
        description: [
            "Giáo Trình Lịch Sử Đảng Cộng Sản Việt Nam.",
            "• Giáo Trình Lịch Sử Đảng Cộng Sản Việt Nam Lịch sử Đảng Cộng sản Việt Nam là môn học được giảng dạy trong hệ thống trường Đảng và các trường đại học, cao đẳng ở nước ta từ hơn bốn mươi năm nay. Trong thời gian đó đã có nhiều tập giáo trình, đề cương bài giảng về môn học này được biên soạn và ấn hành phù hợp với các đối tượng và yêu cầu đào tạo khác nhau.",
            "• Giáo trình gồm ba phần với chín chương và phần kết luận, phản ánh những chặng đường Đảng lãnh đạo cách mạng Việt Nam với đầy khó khăn, thử thách và những thắng lợi vĩ đại của cách mạng nước ta suốt từ năm 1930 đến sát thời điểm Đại hội IX của Đảng.",
            "• Vấn đề quan trọng là cần nắm vững đối tượng nghiên cứu của từng chuyên ngành lịch sử đó để lựa chọn nội dung một cách hợp lý.",
        ],
    },
    5: {
        category: "Truyện tranh",
        title: "Harry Potter Và Bảo Bối Tử Thần",
        main_image: "../../Assest/Book/harry.webp",
        small_images: [
            "../../Assest/Book/harry.webp",
            "../../Assest/Book/harry.webp",
            "../../Assest/Book/harry.webp",
            "../../Assest/Book/harry.webp",
        ],
        author: "J.K.Rowling",
        publisher: "NXB Trẻ",
        censorship: "Bộ văn hoá Việt Nam",
        cover_type: "Bìa mềm",
        price: "102.200đ",
        product_code: "8934974179641",
        supplier: "Cty Nhân Trí Việt",
        translator: "Lý Lan",
        publish_year: "2011",
        page_count: "141",
        form: "Bìa Mềm",
        description: [
            "Harry Potter Và Bảo Bối Tử Thần - Tập 7.",
            "Harry Potter đang chuẩn bị rời khỏi nhà Dursley và đường Privet Drive trong thời khắc cuối cùng. Tuy nhiên, tương lai Harry đầy rẫy hiểm nguy, không chỉ cho cậu mà cả những người gần gũi – và Harry đã mất mát quá nhiều. Chỉ bằng cách tiêu hủy những Trường Sinh Linh Giá, Harry Potter mới có thể tự cứu mình và vượt qua những thế lực đen tối của Chúa tể hắc ám.",
            " Ở phần kết đầy kịch tính của loạt truyện Harry Potter này, Harry phải để những người bạn trung thành nhất ở lại tuyến sau để dấn thân vào cuộc hành trình nguy hiểm cuối cùng hòng tìm kiếm sức mạnh và đối mặt với số phận đáng sợ của cậu: một cuộc chiến sinh tử và đơn độc.",
            "Tình tiết bất ngờ và khó đoán: Mùa cuối hứa hẹn mang đến nhiều tình tiết bất ngờ, khiến người xem không thể rời mắt khỏi màn hình. Những bí ẩn dần được hé lộ, tạo nên sự hấp dẫn và lôi cuốn."
        ],
    },
    6: {
        category: "Truyện tranh",
        title: "Không Gia Đình",
        main_image: "../../Assest/Book/kgd.webp",
        small_images: [
            "../../Assest/Book/kgd.webp",
            "../../Assest/Book/kgd.webp",
            "../../Assest/Book/kgd.webp",
            "../../Assest/Book/kgd.webp",
        ],
        author: "Hector Malot",
        publisher: "NXB Văn Hóa - Văn Nghệ",
        censorship: "Bộ văn hoá Việt Nam",
        cover_type: "Bìa mềm",
        price: "99.200đ",
        product_code: "8935275100167",
        supplier: "Cty Nhân Trí Việt",
        translator: "Hải Đăng",
        publish_year: "2023",
        page_count: "141",
        form: "Bìa Mềm",
        description: [
            "KKHÔNG GIA ĐÌNH kể về cuộc đời của cậu bé Rémi. Từ nhỏ, Rémi đã bị bắt cóc, rồi bị bố nuôi bán cho một đoàn xiếc thú. Em đã theo đoàn xiếc ấy đi lưu lạc khắp nước Pháp.",
            "Rémi đã lớn lên trong gian khổ và lao động để sống. Lúc đầu em được sự dạy bảo của cụ Vitalis, về sau thì tự lập. Không những lo cho mình, em còn lo việc biểu diễn và kiếm sống cho cả một gánh hát rong… Nhưng dù ở đâu, trong cảnh ngộ nào, em vẫn noi theo nếp rèn dạy của cụ Vitalis giữ phẩm chất làm người. Đó là lòng yêu lao động, tự trọng, ngay thẳng, biết nhớ ơn nghĩa và luôn luôn muốn làm người có ích.","KHÔNG GIA ĐÌNH luôn cuốn hút, hấp dẫn người đọc vì đây chính là những cuộc phiêu lưu của lòng dung cảm và tình cảm gia đình. KHÔNG GIA ĐÌNH là quyển sách hay nhất về giáo dục, xứng đáng nhận giả thưởng của Viện Hàn lâm Văn học Pháp.",
        ],
    },
    7: {
        category: "Truyện tranh",
        title: "Mình Nói Gì Khi Nói Về Hạnh Phúc",
        main_image: "../../Assest/Book/mngvtp.webp",
        small_images: [
            "../../Assest/Book/mngvtp.webp",
            "../../Assest/Book/mngvtp.webp",
            "../../Assest/Book/mngvtp.webp",
            "../../Assest/Book/mngvtp.webp",
        ],
        author: "Rosie Nguyễn",
        publisher: "Hội Nhà Văn",
        censorship: "Bộ văn hoá Việt Nam",
        cover_type: "Bìa mềm",
        price: "101.200 đ",
        product_code: "9786043775662",
        supplier: "Cty Nhân Trí Việt",
        translator: "Rosie Nguyễn",
        publish_year: "2023",
        page_count: "141",
        form: "Bìa Mềm",
        description: [
            "`Hạnh phúc khi thấy mình được sinh ra. Được trải qua tất cả những vui buồn sướng khổ. Được tư duy và chiêm nghiệm. Ngẫm ra, được làm người đã là hạnh phúc lắm rồi, có cần điều gì khác nữa đâu.`",
            "Như tắm mình trong dòng suối mùa xuân trong trẻo, như giữa trưa hè nếm một trái đào thanh mát, hay như ngồi trong quán nhỏ thân quen bên người bạn mến thương, Mình Nói Gì Khi Nói Về Hạnh Phúc? là những tâm sự và trải lòng trên hành trình sống và đi của Rosie Nguyễn, với những suy tư về hạnh phúc, về mục đích sống, về thân phận con người, cùng giọng kể thủ thỉ tâm tình, đem lại cảm giác nhẹ nhàng, sâu lắng, khi lấp lánh trong những câu chữ chính là vẻ đẹp của tình yêu cuộc sống.",
            "Chúng nó đang kể một câu chuyện thần tiên: hy vọng chẳng hề biến mất trong một thế giới vô vọng. Tôi vinh dự được nghe một bạn trẻ tài hoa kể những chuyện như thế, trong một buổi chiều nắng đẹp, vừa lật từng trang bản thảo vừa vui trong lòng.",
            "“Đâu cần phải đi xa để biết nhìn, biết thấy. Ngay trước mắt, mấy ai đã biết thấy, biết nhìn, biết khám phá cái đẹp trong mỗi cảnh vật đơn sơ, một chiếc ba lô cũ bạc màu, một lát dưa leo xắt mỏng? Một góc nhà, một bàn viết, một quyển sách cũng là một thế giới thần tiên?"
        ],
    },
    8: {
        category: "Truyện tranh",
        title: "Nhà Giả Kim",
        main_image: "../../Assest/Book/ngk.webp",
        small_images: [
            "../../Assest/Book/ngk.webp",
            "../../Assest/Book/ngk.webp",
            "../../Assest/Book/ngk.webp",
            "../../Assest/Book/ngk.webp",
        ],
        author: "Paulo Coelho",
        publisher: "Nhã Nam",
        censorship: "Bộ văn hoá Việt Nam",
        cover_type: "Bìa mềm",
        price: "75.000đ",
        product_code: "8935235200524",
        supplier: "Cty Nhân Trí Việt",
        translator: "Lê Chu Cầu",
        publish_year: "2023",
        page_count: "141",
        form: "Bìa Mềm",
        description: [
            "Tiểu thuyết Nhà giả kim của Paulo Coelho như một câu chuyện cổ tích giản dị, nhân ái, giàu chất thơ, thấm đẫm những minh triết huyền bí của phương Đông. Trong lần xuất bản đầu tiên tại Brazil vào năm 1988, sách chỉ bán được 900 bản. Nhưng, với số phận đặc biệt của cuốn sách dành cho toàn nhân loại, vượt ra ngoài biên giới quốc gia, Nhà giả kim đã làm rung động hàng triệu tâm hồn, trở thành một trong những cuốn sách bán chạy nhất mọi thời đại, và có thể làm thay đổi cuộc đời người đọc.",
            "Nhưng nhà luyện kim đan không quan tâm mấy đến những điều ấy. Ông đã từng thấy nhiều người đến rồi đi, trong khi ốc đảo và sa mạc vẫn là ốc đảo và sa mạc. Ông đã thấy vua chúa và kẻ ăn xin đi qua biển cát này, cái biển cát thường xuyên thay hình đổi dạng vì gió thổi nhưng vẫn mãi mãi là biển cát mà ông đã biết từ thuở nhỏ.",
            "Tuy vậy, tự đáy lòng mình, ông không thể không cảm thấy vui trước hạnh phúc của mỗi người lữ khách, sau bao ngày chỉ có cát vàng với trời xanh nay được thấy chà là xanh tươi hiện ra trước mắt. ‘Có thể Thượng đế tạo ra sa mạc chỉ để cho con người biết quý trọng cây chà là.’"
        ],
    },
    9: {
        category: "Truyện tranh",
        title: "The Art of Ori and the Will of the Wisps",
        main_image: "../../Assest/Book/ori.webp",
        small_images: [
            "../../Assest/Book/ori.webp",
            "../../Assest/Book/ori.webp",
            "../../Assest/Book/ori.webp",
            "../../Assest/Book/ori.webp",
        ],
        author: "Future Press",
        publisher: "BookShop 360",
        censorship: "Amazon International",
        cover_type: "Bìa mềm",
        price: "300.200đ",
        product_code: "############",
        supplier: "Amazon",
        translator: "Không có bản dịch",
        publish_year: "2020",
        page_count: "86",
        form: "Bìa Mềm",
        description: [
            "The Art of Ori and the Will of the Wisps là một tác phẩm nghệ thuật độc đáo, tập trung hoàn toàn vào các bức tranh khái niệm, bản phác thảo và storyboard tuyệt vời đã tạo nên một kiệt tác hiện đại đích thực. Cuốn sách này có hơn 500 tác phẩm nghệ thuật, mỗi tác phẩm đều được kèm theo lời bình của các nghệ sĩ tại Moon Studios.",
            "Cuốn sách “The Art of Ori and the Will of the Wisps” không chỉ dừng lại ở việc trình bày các tác phẩm nghệ thuật, mà còn đưa bạn vào hành trình sáng tạo của đội ngũ phát triển. Bạn sẽ được khám phá những ý tưởng ban đầu, quá trình thử nghiệm và những quyết định thiết kế quan trọng.",
            "Điều này giúp bạn hiểu rõ hơn về cách mà hình ảnh trong trò chơi đã được hình thành và phát triển từ ý tưởng đến hiện thực. Cuốn sách này thực sự là một kho tàng cho những người yêu thích nghệ thuật và trò chơi điện tử!"
        ],
    },
    10: {
        category: "Truyện tranh",
        title: "Lịch Sử 12 (Kết Nối) (Chuẩn)",
        main_image: "../../Assest/Book/su12.webp",
        small_images: [
            "../../Assest/Book/su12.webp",
            "../../Assest/Book/su12.webp",
            "../../Assest/Book/su12.webp",
            "../../Assest/Book/su12.webp",
        ],
        author: "Nhiều Tác Giả",
        publisher: "Nhà xuất bản Giáo Dục",
        censorship: "Nhà xuất bản Giáo Dục",
        cover_type: "Bìa mềm",
        price: "61.000đ",
        product_code: "9786043775662",
        supplier: "Nhà xuất bản Giáo Dục",
        editor: "TS Nguyễn Thị Minh Hồng",
        publish_year: "2023",
        page_count: "141",
        form: "Bìa Mềm",
        description: [
            "Sách được biên soạn theo chương trình giáo dục phổ thông mới, thuộc bộ sách kết nối tri thức.",
            "Với việc lựa chọn các nội dung học tập đảm bảo tính chuẩn mực, hiện đại, phong phú và đa dạng; hình thức thể hiện đẹp, có sự kết hợp hài hoà giữa kênh hình và kênh chữ sẽ gây hứng thú học tập giúp các em yêu thích học tập môn lịch sử hơn.",
            "Lịch sử luôn là một phần cốt yếu trong cuộc sống, là nguồn gốc của niềm tự hào dân tộc cũng như nhắc nhở thế hệ trẻ phải biết ơn với những công lao của cha ông ta.",
            "Lịch sử 12 cung cấp những cái nhìn trực quan về những phong trào cách mạng, những người anh hùng vĩ đại của dân tộc và những chiến công hào hùng đi vào lịch sử Việt Nam."
        ],
    },
    11: {
        category: "Truyện tranh",
        title: "Thỏ Bảy Màu Và Những Người Nghĩ Nó Là Bạn",
        main_image: "../../Assest/Book/tbm.webp",
        small_images: [
            "../../Assest/Book/tbm.webp",
            "../../Assest/Book/tbm.webp",
            "../../Assest/Book/tbm.webp",
            "../../Assest/Book/tbm.webp",
        ],
        author: "Huỳnh Thái Ngọc",
        publisher: "Dân Trí",
        censorship: "Bộ văn hoá Việt Nam",
        cover_type: "Bìa mềm",
        price: "85.200đ",
        product_code: "9786048862886",
        supplier: "Cty Nhân Trí Việt",
        editor: "Huỳnh Thái Ngọc",
        publish_year: "2023",
        page_count: "141",
        form: "Bìa Mềm",
        description: [
            "Thỏ Bảy Màu Và Những Người Nghĩ Nó Là Bạn (Tái Bản 2023)",
            "Thỏ Bảy Màu là fanpage sở hữu hơn 2,6tr lượt thích trên mạng xã hội. Với hình tượng nhân vật thú vị cùng phong cách sáng tạo độc đáo, Thỏ bảy màu vẫn luôn là thu hút được số lượng lớn người quan tâm thể hiện qua nhiều bài viết với hàng chục nghìn lượt like và share.",
            "Thỏ Bảy Màu đơn giản chỉ là một con thỏ trắng với sự dở hơi, ngang ngược nhưng đáng yêu vô cùng tận. Nó luôn nghĩ rằng mình không có cuộc sống và không có bạn bè. Tuy nhiên, Thỏ lại chẳng bao giờ thấy cô đơn vì đến cô đơn cũng bỏ nó mà đi.",
            "Cuốn sách là những mẩu chuyện nhỏ được ghi lại bằng tranh xoay quanh Thỏ Bảy Màu và những người nghĩ nó là bạn. Những mẩu chuyện được truyền tải rất “teen” đậm chất hài hước, châm biếm qua sự sáng tạo không kém phần “mặn mà” của tác giả càng trở nên độc đáo và thu hút."
        ],
    },
    12: {
        category: "Sách giáo khoa",
        title: "Tiếng Anh 8",
        main_image: "../../Assest/Book/ta8.webp",
        small_images: [
            "../../Assest/Book/ta8.webp",
            "../../Assest/Book/ta8.webp",
            "../../Assest/Book/ta8.webp",
            "../../Assest/Book/ta8.webp",
        ],
        author: "Nhiều tác giả",
        publisher: "Giáo Dục Việt Nam",
        censorship: "Giáo Dục Việt Nam",
        cover_type: "Bìa mềm",
        price: "61.000đ",
        product_code: "9786043775662",
        supplier: "Bộ Giáo Dục Việt Nam",
        editor: "TS Nguyễn Thị Minh Hồng",
        publish_year: "2000",
        page_count: "98",
        form: "Bìa Mềm",
        description: [
            "Tiếng anh 12",
            "Phù hợp: Học sinh lớp 12 và các cấp độ tiếng Anh B1",
            "Mục tiêu: cải thiện trình độ kỹ năng tiếng Anh cơ bản",
            "Thời lượng khuyến khích học: 1 tháng."
        ],
    },
    13: {
        category: "Sách giáo khoa",
        title: "Toán 10",
        main_image: "../../Assest/Book/toan10.webp",
        small_images: [
            "../../Assest/Book/toan10.webp",
            "../../Assest/Book/toan10.webp",
            "../../Assest/Book/toan10.webp",
            "../../Assest/Book/toan10.webp",
        ],
        author: "Nhiều tác giả",
        publisher: "Bộ giáo dục và đào tạo",
        censorship: "Bộ giáo dục và đào tạo",
        cover_type: "Bìa mềm",
        price: "61.000đ",
        product_code: "9786043775662",
        supplier: "Bộ giáo dục và đào tạo",
        editor: "TS Nguyễn Thị Minh Hồng",
        publish_year: "2015",
        page_count: "141",
        form: "Bìa Mềm",
        description: [
            "Toán 10 - Trân trời mới",
            "Nối tiếp truyền thống giáo dục toán học 10, SGK Toán 10 - Trân trời mới đem đến một cái nhìn tiến bộ hơn về toán học cũng như những phương thức cải thiện tư duy",
            "Nội dung cải thiện: Rút ngắn các công thức không cần thiết, bổ sung thêm các kiến thức khoa học hiện đại và cải cách lại phương thức giảng dạy",
            "Phương thức giảng dạy: Trực tiếp và thực hành.",
        ],
    },
    14: {
        category: "Truyện tranh",
        title: "Tuổi Trẻ Đáng Giá Bao Nhiêu",
        main_image: "../../Assest/Book/ttdgbn.webp",
        small_images: [
            "../../Assest/Book/ttdgbn.webp",
            "../../Assest/Book/ttdgbn.webp",
            "../../Assest/Book/ttdgbn.webp",
            "../../Assest/Book/ttdgbn.webp",
        ],
        author: "Rosie Nguyễn",
        publisher: "Nhã Nam",
        censorship: "Bộ văn hoá Việt Nam",
        cover_type: "Bìa mềm",
        price: "61.000đ",
        product_code: "9786043775662",
        supplier: "Cty Nhân Trí Việt",
        translator: "Rosie Nguyễn",
        publish_year: "2021",
        page_count: "141",
        form: "Bìa Mềm",
        description: [
            "“Bạn hối tiếc vì không nắm bắt lấy một cơ hội nào đó, chẳng có ai phải mất ngủ.",
            "Bạn trải qua những ngày tháng nhạt nhẽo với công việc bạn căm ghét, người ta chẳng hề bận lòng.",
            "Bạn có chết mòn nơi xó tường với những ước mơ dang dở, đó không phải là việc của họ.",
            "Suy cho cùng, quyết định là ở bạn. Muốn có điều gì hay không là tùy bạn.",
            "Nên hãy làm những điều bạn thích. Hãy đi theo tiếng nói trái tim. Hãy sống theo cách bạn cho là mình nên sống.",
            "Vì sau tất cả, chẳng ai quan tâm.",
            "“Tôi đã đọc quyển sách này một cách thích thú. Có nhiều kiến thức và kinh nghiệm hữu ích, những điều mới mẻ ngay cả với người gần trung niên như tôi.",
            "Tuổi trẻ đáng giá bao nhiêu? được tác giả chia làm 3 phần: HỌC, LÀM, ĐI.",
            "Nhưng tôi thấy cuốn sách còn thể hiện một phần thứ tư nữa, đó là ĐỌC.",
            "Hãy đọc sách, nếu bạn đọc sách một cách bền bỉ, sẽ đến lúc bạn bị thôi thúc không ngừng bởi ý muốn viết nên cuốn sách của riêng mình.",
            "Nếu tôi còn ở tuổi đôi mươi, hẳn là tôi sẽ đọc Tuổi trẻ đáng giá bao nhiêu? nhiều hơn một lần.”",
        ],
    },
};

// Hàm lấy đường link của người dùng
function getQueryParam(name) {
    let urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Function to load the book data
function loadBookData(bookId) {
    let book = danhSach[bookId];
    if (!book) {
        alert(`Không tìm thấy sách có id là: ${bookId} !`);
        return;
    }

    document.getElementById("category").innerText = book.category;
    document.getElementById("title").innerText = book.title;
    document.getElementById("main_image").innerHTML = `<img src="${book.main_image}" />`;

    book.small_images.forEach((img, index) => {
        let imgElement = document.getElementById(`small_img_${index + 1}`);
        if (imgElement) {
            imgElement.src = img;
        }
    });


    //Cập nhật phần 
    document.getElementById("book_title").innerText = book.title;
    document.getElementById("author").innerText = book.author;
    document.getElementById("publisher").innerText = book.publisher;
    document.getElementById("censorship").innerText = book.censorship;
    document.getElementById("cover_type").innerText = book.cover_type;
    document.getElementById("price").innerText = book.price;
    document.getElementById("product_code").innerText = book.product_code;
    document.getElementById("supplier").innerText = book.supplier;
    document.getElementById("author_detail").innerText = book.author;
    document.getElementById("translator").innerText = book.translator;
    document.getElementById("publisher_detail").innerText = book.publisher;
    document.getElementById("publish_year").innerText = book.publish_year;
    document.getElementById("page_count").innerText = book.page_count;
    document.getElementById("form").innerText = book.form;

    //Cập nhật phần mô tả của sách
    let descriptionList = document.getElementById("description");
    descriptionList.innerHTML = "";
    book.description.forEach(item => {
        let li = document.createElement("li");
        li.innerText = item;
        descriptionList.appendChild(li);
    });

    // Setting the buy-now link"s data-id attribute
    document.getElementById("buy-now").setAttribute("data-id", bookId);
}

// Lấy id của sách từ đường link href
let bookId = getQueryParam("id");

// Nếu đường link tới sách hợp lý
if (bookId) {
    loadBookData(bookId);
} else {
    alert("Có vấn đề xảy ra. Vui lòng hãy về trang chủ!");
}