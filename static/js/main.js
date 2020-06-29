function viewDiv(){
  // будущий ник
  var text = "";

  // строки с согласными и гласными буквами латинского алфавита
  var consonant_words = "bcdfghklmnprstvwxz";
  var vowels_words = "aoiuye";

  // рандомное число для выбора первой буквы ника (гласной или согласной)
  let rand_one = 0 - 0.5 + Math.random() * (1 - 0 + 1);
  var words_random_number = Math.round(rand_one);

  var words_random_number_choice = Math.round(rand_one);

  // рандомное количество букв в нике
  let rand_two = 3 - 0.5 + Math.random() * (10 - 3 + 1);
  var word_random_length = Math.round(rand_two);

  // строится ник
  for( var i=0; i < word_random_length; i++ )
      if (words_random_number_choice == 0) {
          if (text == "") {
            text += consonant_words.charAt(Math.floor(Math.random() * consonant_words.length)).toUpperCase();
            var words_random_number_choice = 1
          }
          else {
            text += consonant_words.charAt(Math.floor(Math.random() * consonant_words.length));
            var words_random_number_choice = 1
          }
      } else {
          if (text == "") {
            text += vowels_words.charAt(Math.floor(Math.random() * vowels_words.length)).toUpperCase();
            var words_random_number_choice = 0
          }
          else {
            text += vowels_words.charAt(Math.floor(Math.random() * vowels_words.length));
            var words_random_number_choice = 0
          }
      }

  // присваиваю div1 сделанный ник
  document.getElementById("div1").innerHTML = text;
  // изменяется display css у div1
  document.getElementById("div1").style.display = "block";
};