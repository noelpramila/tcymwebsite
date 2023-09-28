import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.scss']
})
export class MetricsComponent implements OnInit {

  metrics = [
    {
      Place1: 'சென்னை மயிலை உயர் மறைமாவட்டம்',
      Place2:'செங்கல்பட்டு மறைமாவட்டம்',
      Place3:'வேலூர் மறைமாவட்டம்',
      Place4:'பாண்டி கடலூர் உயர் மறைமாவட்டம்',
      value: 'வடக்கு மண்டலம்',
    
    },
    {
      Place1: 'கோட்டாறு மறைமாவட்டம்',
      Place2:'குழித்துறை மறைமாவட்டம்',
      Place3:'தூத்துக்குடி மறைமாவட்டம்',
      Place4:'பாளையங்கோட்டை மறைமாவட்டம்',
      value: 'தெற்கு மண்டலம்'
    },
    {
      Place1: 'சேலம் மறைமாவட்டம்',
      Place2:'கோயம்புத்தூர் மறைமாவட்டம்',
      Place3:'தருமபுரி மறைமாவட்டம்',
      Place4:'ஊட்டி மறைமாவட்டம்',
      value: 'மேற்கு மண்டலம'
    },
    {
      Place1: 'மதுரை உயர் மறைமாவட்டம்',
      Place2:'திண்டுக்கல் மறைமாவட்டம்',
      Place3:'சிவகங்கை மறைமாவட்டம்',
      value: 'கிழக்கு மண்டலம்'
    },
    {
      Place1: 'தஞ்சாவூர் மறைமாவட்டம்',
      Place2:'கும்பகோணம் மறைமாவட்டம்',
      Place3:'திருச்சி மறைமாவட்டம்',
      value: 'நடு மண்டலம்'
    }
  ]

  metrics1 = [
    {
      value:'வடக்கு மண்டலம்,trest,test,'
    },
   
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
