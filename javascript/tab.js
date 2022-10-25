// for (let i = 0; i < 3; i++) {
  
//   $('.tab-button').eq(i).on('click', function() {
//     탭열기(i)
// });
// };

$('.list').click(function(e) {
  탭열기(e.target.dataset.id)
});

function 탭열기(숫자) {
  $('.tab-button').removeClass('orange');
  $('.tab-button').eq(숫자).addClass('orange');
  $('.tab-content').removeClass('show');
  $('.tab-content').eq(숫자).addClass('show');
}
// let 버튼 = $('.tab-button');

// $(버튼).eq(0).on('click', function() {
//   $(버튼).removeClass('orange');
//   $(버튼).eq(0).addClass('orange');
//   $('.tab-content').removeClass('show');
//   $('.tab-content').eq(0).addClass('show');
// });

// $(버튼).eq(1).on('click', function() {
//   $(버튼).removeClass('orange');
//   $(버튼).eq(1).addClass('orange');
//   $('.tab-content').removeClass('show');
//   $('.tab-content').eq(1).addClass('show');
// });

// $(버튼).eq(2).on('click', function() {
//   $(버튼).removeClass('orange');
//   $(버튼).eq(2).addClass('orange');
//   $('.tab-content').removeClass('show');
//   $('.tab-content').eq(2).addClass('show');
// });