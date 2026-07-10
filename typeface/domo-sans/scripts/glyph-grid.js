var groups = [
  {
    label: "Hoa",
    chars: "A Ă Â B C D Đ E Ê F G H I J K L M N O Ô Ơ P Q R S T U Ư V W X Y Z".split(" "),
  },
  {
    label: "Thường",
    chars: "a ă â b c d đ e ê f g h i j k l m n o ô ơ p q r s t u ư v w x y z".split(" "),
  },
  { label: "a — thanh điệu", chars: "a à á ả ã ạ".split(" ") },
  { label: "ă — thanh điệu", chars: "ă ằ ắ ẳ ẵ ặ".split(" ") },
  { label: "â — thanh điệu", chars: "â ầ ấ ẩ ẫ ậ".split(" ") },
  { label: "e — thanh điệu", chars: "e è é ẻ ẽ ẹ".split(" ") },
  { label: "ê — thanh điệu", chars: "ê ề ế ể ễ ệ".split(" ") },
  { label: "i — thanh điệu", chars: "i ì í ỉ ĩ ị".split(" ") },
  { label: "o — thanh điệu", chars: "o ò ó ỏ õ ọ".split(" ") },
  { label: "ô — thanh điệu", chars: "ô ồ ố ổ ỗ ộ".split(" ") },
  { label: "ơ — thanh điệu", chars: "ơ ờ ớ ở ỡ ợ".split(" ") },
  { label: "u — thanh điệu", chars: "u ù ú ủ ũ ụ".split(" ") },
  { label: "ư — thanh điệu", chars: "ư ừ ứ ử ữ ự".split(" ") },
  { label: "y — thanh điệu", chars: "y ỳ ý ỷ ỹ ỵ".split(" ") },
  {
    label: "Số & ký hiệu",
    chars: "0 1 2 3 4 5 6 7 8 9 . , : ; ! ? \" ' ( ) [ ] { } / \\ - _ + = * & % # @ ~".split(" "),
  },
];

var container = document.getElementById("glyph-groups");

groups.forEach(function (group) {
  var section = document.createElement("div");
  section.className = "glyph-grid-section";

  var label = document.createElement("span");
  label.className = "glyph-grid-section__label";
  label.textContent = group.label;
  section.appendChild(label);

  var grid = document.createElement("div");
  grid.className = "glyph-grid";

  group.chars.forEach(function (ch) {
    var cell = document.createElement("div");
    cell.className = "glyph-grid__cell";

    var domo = document.createElement("div");
    domo.className = "glyph-grid__glyph glyph-grid__glyph--domo";
    domo.textContent = ch;

    var lexend = document.createElement("div");
    lexend.className = "glyph-grid__glyph glyph-grid__glyph--lexend";
    lexend.textContent = ch;

    var caption = document.createElement("div");
    caption.className = "glyph-grid__label";
    caption.textContent = ch;

    cell.appendChild(domo);
    cell.appendChild(lexend);
    cell.appendChild(caption);
    grid.appendChild(cell);
  });

  section.appendChild(grid);
  container.appendChild(section);
});
