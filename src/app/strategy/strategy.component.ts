import { Component, Input, OnInit } from '@angular/core';
import { StrategyViewData } from './StrategyViewData';

@Component({
  selector: 'app-strategy',
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.scss']
})
export class StrategyComponent implements OnInit {

  @Input() view!: string;

  data!: StrategyViewData;
  private viewData = new Map<string, StrategyViewData>();

  constructor() {
    this.viewData.set('strategy', {
      title: 'Our Success Strategy',
      description: "• To form YCS/YSM in all the parishes and the Catholic Schools.<br>• To form the youth movements compulsorily in all the parishes and substations. <br> .To make all the youth participate in the movements as members.<br>• To conduct trainings and activities to develop the integrated personality of the youth.• To make efforts to promote meditation and Vocationto improve their spiritual life. <br>• To set up training courses on education and employment.<br>• To create social, political, economic and cultural awareness. To encourage youth to work and participate in all fields.<br>• To conduct folk arts trainings, art festivals and intellectual competitions.<br>• To give priority to Catholic youth in admission of all schools and colleges.<br>• To encourage youth to raise their voice and to protest against injustice,and the acts against equality and fraternal society. <br>• To encourage the youth to develop positive thoughts to help those who are living in the corner of the society and who are dependent on others.<br>    • To organise youth conferences in vicariate and diocese level to create fraternity and awareness among them. <br>• To make them the youth by providing proper representation in all organizations such as parish, vicariate and diocese.<br>• To encourage the priests to act as friends, facilitators and mentors of the youth. For this purpose, training is given in seminaries and religious formation centres. <br>• To guide the laity to preparefor youth ministry.",
      
      image: '../../assets/pictures/action.jpeg'
    });
    this.viewData.set('donation', {
      title: 'செயல்பாடுகள்',
      description: '◦ எல்லாப் பங்குகளிலும் கத்தோலிக்கப் பள்ளிகளிலும் இளம் கத்தோலிக்க/இளம் மாணாக்கர் இயக்கத்தினை (YCS/YSM) உருவாக்குதல். <br> ◦ அனைத்துப் பங்குத் தளங்கள், கிளைப் பங்குளில் இளைஞர் இயக்கங்களை கட்டாயம் உருவாக்குதல். அனைத்துக் கத்தோலிக்க இருபால் இளைஞரையும் இவ்வியக்கத்தில் உறுப்பினராகப் பங்கேற்கச் செய்தல். ,<br>◦ இளைஞரின் ஒருங்கினணந்த ஆளுமையை வளர்க்கும் பயிற்சிகளையும் செயல்பாடுகளையும் முன்னெடுத்தல். <br>◦ ஆன்மீக வாழ்விலே சிறந்து விளங்கும் வகையில் தியானங்கள் இறையழைத்தலை ஊக்குவிக்கும் முயற்சிகளை மேற்கொள்ளல். ,<br> ◦ கல்வி, வேலைவாய்ப்பு குறித்த பயிற்சிப்பாசறைகளை அமைத்தல். <br>◦ சமுதாய, அரசியல், பொருளாதார, பண்பாட்டு விழிப்புணர்வை ஏற்படுத்துதல். எல்லாத் துறைகளிலும் இளைஞர் பணி செய்யவும் பங்கேற்கவும் ஊக்கப்படுத்துதல். ,<br>◦ கலைப்பயிற்சிகள், கலை விழாக்கள், அறிவுத்திறனை வளர்க்கும் போட்டிகளை  நடத்துதல். <br> ◦ எல்லாப் பள்ளிகளிலும் கல்லுரிகளிலும் கத்தோலிக்க இளைஞர்களுக்கு முன்னுரிமை கிடைக்க ஏற்பாடு செய்தல். <br> ◦ சமத்துவ, சகோதரத்துவ சமுதாயத்திற்கு எதிரான செயல்பாடுகளைக் கண்டித்து, அநீதிகளை தட்டிக் கேட்கவும் எதிராகப் போராடவும் இளைஞரை ஊக்குவித்தல். <br> ◦ சமுகத்தின் கடைநிலையில் வாழ்வோருக்கும் பிறரைச் சார்ந்து வாழ்வோருக்கும் உதவி செய்யும் நல்லுணர்வுகளை இளைஞர்களிடையே ஊக்குவித்தல் <br> ◦ மறைவட்ட, மறைமாவட்ட அளவில் இளைஞர் மாநாடு அமைத்து அவர்களிடையே தோழமையையும் விழிப்புணர்வையும் ஏற்படுத்துதல். <br> ◦ பங்குத்தளம், மறைவட்டம், மறைமாவட்டம் என இயங்கும் அனைத்து அமைப்புகளிலும் இளைஞர்களுக்கு முறையான உரிய பிரதிநிதித்துவத்தை கட்டாயம் அளித்து பங்கேற்க வைத்தல். <br> ◦ குருக்களை, இளைஞரின் நண்பர்களாகவும் ஆற்றுப்படுத்துநர்களாகவும் வழிகாட்டிகளாகவும் செயல்பட ஆர்வத்தை ஏற்படுத்துதல். இதற்காகக் குருமடங்களில், துறவத்தாரை உருவாக்கும் தலங்களில் பயிற்சி அளித்தல். <br>◦ பொதுநிலையினரை இளைஞர் பணிக்காகத் தயாரித்து வழிநடத்துதல்.',
      image: '../../assets/pictures/activity.jpeg'
    });
  }

  ngOnInit(): void {
    this.view = this.view == undefined ? 'strategy' : this.view;
    this.data = this.viewData.get(this.view)!;  
  }

}
