import {Component, OnInit} from '@angular/core';
import {DoadorService} from '../doador.service';

import {ChartOptions, ChartType} from 'chart.js';
import {Label} from 'ng2-charts';

import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  pieChartType: ChartType = 'pie';
  pieChartLegend = false;
  pieChartPlugins = [pluginDataLabels];
  pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };

  porEstadoLabels: Label[] = [];
  porEstadoData: number[] = [];

  porFaixaEtariaLabels: Label[] = [];
  porFaixaEtariaData: number[] = [];

  obesosMasculinoLabels: Label[] = [];
  obesosMasculinoData: number[] = [];

  obesosFemininoLabels: Label[] = [];
  obesosFemininoData: number[] = [];

  porTipoSanguineoLabels: Label[] = [];
  porTipoSanguineoData: number[] = [];

  porPossivelDoadorLabels: Label[] = [];
  porPossivelDoadorData: number[] = [];

  constructor(protected doadorService: DoadorService) {
  }

  ngOnInit(): void {
    this.doadorService.porEstado().subscribe(data => {
      data.forEach(d => {
        this.porEstadoLabels.push(d.estado);
        this.porEstadoData.push(d.quantidade);
      });
    });

    this.doadorService.porFaixaEtaria().subscribe(data => {
      data.forEach(d => {
        this.porFaixaEtariaLabels.push(' <= ' + d.ateIdade);
        this.porFaixaEtariaData.push(d.quantidade);
      });
    });

    this.doadorService.percentualObesos('Masculino').subscribe(data => {
      const diferenca = 100 - data;
      this.obesosMasculinoLabels.push('Obesos ' + data + '%', 'Saudáveis: ' + diferenca + '%');
      this.obesosMasculinoData.push(data, diferenca);
    });

    this.doadorService.percentualObesos('Feminino').subscribe(data => {
      const diferenca = 100 - data;
      this.obesosFemininoLabels.push('Obesas: ' + data + '%', 'Saudáveis: ' + diferenca + '%');
      this.obesosFemininoData.push(data, diferenca);
    });

    this.doadorService.porTipoSanguineo().subscribe(data => {
      data.forEach(d => {
        this.porTipoSanguineoLabels.push(d.tipoSanguineo);
        this.porTipoSanguineoData.push(d.quantidade);
      });
    });

    this.doadorService.porPossivelDoador().subscribe(data => {
      data.forEach(d => {
        this.porPossivelDoadorLabels.push(d.tipoSanguineo);
        this.porPossivelDoadorData.push(d.quantidade);
      });
    });

  }

}
