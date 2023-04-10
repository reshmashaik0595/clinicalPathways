import { Component } from '@angular/core';

@Component({
  selector: 'app-smoking-cessation',
  templateUrl: './smoking-cessation.component.html',
  styleUrls: ['./smoking-cessation.component.css'],
})
export class SmokingCessationComponent {
  cateories = [
    {
      title: 'History and Interview',
      containChild: true,
      children: [{ title: 'Child 1.1' }, { title: 'Child 1.2' }],
    },
    {
      title: 'Managements',
      data:'<ul>',
      containChild: true,
      children: [{ title: 'Child 2.1' }, { title: 'Child 2.2' }],
    },
    {
      title: 'References',
      containChild: false,
      data: '<p class="accordion-body">Suls JM, Luger TM, Curry SJ, Mermelstein RJ, Sporer AK, An LC. Efficacy of smoking-cessation interventions for young adults: a meta-analysis. Am J Prev Med. 2012 Jun;42(6):655-62. doi: 10.1016/j.amepre.2012.02.013. PMID: 22608385; PMCID: PMC3653592.<br/><br/><a class="link" href="https://www.cdc.gov/tobacco/campaign/tips/quit-smoking/quit-smoking-medications/how-to-use-quit-smoking-medicines/how-to-use-nicotine-gum.html#:~:text=Nicotine%20gum%20is%20not%20like%20regular%20chewing%20gum.&text=Hold%20it%20for%20about%20a,the%20gum%20in%20your%20mouth." target="_blank">How to Use Nicotine Gum</a><br/><a href="https://www.nicorette.com/usage-science/nicorette-gum" target="_blank" class="link"> How to Use Nicorette® Gum</a><br/><br/>How to Use Nicorette Lozenge (n.d.). Retrieved November 18, 2022, from <a class="link" href="https://www.nicorette.com/usage-science/nicorette-lozenge/" target="_blank">How to Use Nicorette Lozenge</a><br/></br><a class="link" href="https://www.nicorette.ca/products/inhaler" target="_blank">NICORETTE® Smoking Cessation Inhaler</a></p>',
    },
    {
      title: 'Acknowledgments',
      containChild: false,
      data: '<ul><li><b>Date of Last Revision: </b> 00-00-0000 </li><li><b>Date of Next Revision: </b> 00-00-0000 </li><ul>',
    },
  ];
}
