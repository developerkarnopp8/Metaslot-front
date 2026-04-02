import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../core/services/seo.service';

interface DepositSlot {
  number: number;
  status: 'completed' | 'available';
}

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  private seo = inject(SeoService);
  menuOpen = false;

  ngOnInit(): void {
    this.seo.set({
      title: 'Desafio dos 200 Depósitos | Poupe R$20.100 em Grupo',
      description: 'Metaslot é a plataforma colaborativa do Desafio dos 200 Depósitos. Monte seu grupo, escolha seus slots e acumule R$20.100,00 juntos. Comece grátis agora!',
      canonicalPath: '/'
    });
  }

  previewSlots: DepositSlot[] = Array.from({ length: 15 }, (_, i) => ({
    number: i + 1,
    status: i < 9 ? 'completed' : 'available'
  }));

  steps = [
    {
      number: '01',
      title: 'Crie sua Planilha',
      description: 'Configure seu desafio dos 200 depósitos e convide amigos para participar juntos.'
    },
    {
      number: '02',
      title: 'Escolha o Número',
      description: 'Selecione um número de 1 a 200. O valor do depósito corresponde ao número escolhido.'
    },
    {
      number: '03',
      title: 'Realize o Depósito',
      description: 'Confirme seu depósito e acompanhe o progresso em tempo real com sua equipe.'
    },
    {
      number: '04',
      title: 'Alcance a Meta',
      description: 'Complete todos os 200 depósitos e acumule R$20.100,00 juntos!'
    }
  ];

  features = [
    {
      icon: '👥',
      title: 'Gestão Colaborativa',
      description: 'Convide membros, compartilhe progresso e alcance metas financeiras em grupo de forma organizada.'
    },
    {
      icon: '📊',
      title: 'Progresso em Tempo Real',
      description: 'Visualize o mapa completo dos 200 slots, acompanhe quem depositou e quanto falta para a meta.'
    },
    {
      icon: '🔒',
      title: 'Segurança Total',
      description: 'Autenticação segura, dados criptografados e controle de acesso por papéis (owner, editor, viewer).'
    }
  ];
}
