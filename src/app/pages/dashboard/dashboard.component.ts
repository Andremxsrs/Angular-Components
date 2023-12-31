import { Component, AfterViewInit, ElementRef } from '@angular/core';
import ApexCharts from 'apexcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    if (this.elementRef.nativeElement.querySelector('#main-chart')) {
      const chart = new ApexCharts(this.elementRef.nativeElement.querySelector('#main-chart'), this.getMainChartOptions());
      chart.render();

      // init again when toggling dark mode
      document.addEventListener('dark-mode', () => {
        chart.updateOptions(this.getMainChartOptions());
      });
    }

    if (this.elementRef.nativeElement.querySelector('#new-products-chart')) {
      const options = this.getNewProductsChartOptions();
      const chart = new ApexCharts(this.elementRef.nativeElement.querySelector('#new-products-chart'), options);
      chart.render();
    }

    if (this.elementRef.nativeElement.querySelector('#sales-by-category')) {
      const options = this.getSalesByCategoryOptions();
      const chart = new ApexCharts(this.elementRef.nativeElement.querySelector('#sales-by-category'), options);
      chart.render();
    }

    if (this.elementRef.nativeElement.querySelector('#visitors-chart')) {
      const options = this.getVisitorsChartOptions();
      const chart = new ApexCharts(this.elementRef.nativeElement.querySelector('#visitors-chart'), options);
      chart.render();
    }

    if (this.elementRef.nativeElement.querySelector('#signups-chart')) {
      const options = this.getSignupsChartOptions();
      const chart = new ApexCharts(this.elementRef.nativeElement.querySelector('#signups-chart'), options);
      chart.render();
    }
  }

  getMainChartOptions(): ApexCharts.ApexOptions {
    let mainChartColors: any = {};

    if (document.documentElement.classList.contains('dark')) {
      mainChartColors = {
        borderColor: '#374151',
        labelColor: '#9CA3AF',
        opacityFrom: 0,
        opacityTo: 0.15,
      };
    } else {
      mainChartColors = {
        borderColor: '#F3F4F6',
        labelColor: '#6B7280',
        opacityFrom: 0.45,
        opacityTo: 0,
      };
    }

    return {
      chart: {
        height: 420,
        type: 'area',
        fontFamily: 'Inter, sans-serif',
        foreColor: mainChartColors.labelColor,
        toolbar: {
          show: false,
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark', // Cambia 'enabled' a 'shade'
          shadeIntensity: 0.45,
          opacityFrom: mainChartColors.opacityFrom,
          opacityTo: mainChartColors.opacityTo,
        },
      },
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        style: {
          fontSize: '14px',
          fontFamily: 'Inter, sans-serif',
        },
      },
      grid: {
        show: true,
        borderColor: mainChartColors.borderColor,
        strokeDashArray: 1,
        padding: {
          left: 35,
          bottom: 15,
        },
      },
      series: [
        {
          name: 'Revenue',
          data: [6356, 6218, 6156, 6526, 6356, 6256, 6056],
          color: '#1A56DB',
        },
        {
          name: 'Revenue (previous period)',
          data: [6556, 6725, 6424, 6356, 6586, 6756, 6616],
          color: '#FDBA8C',
        },
      ],
      markers: {
        size: 5,
        strokeColors: '#ffffff',
        hover: {
          size: undefined,
          sizeOffset: 3,
        },
      },
      xaxis: {
        categories: ['01 Feb', '02 Feb', '03 Feb', '04 Feb', '05 Feb', '06 Feb', '07 Feb'],
        labels: {
          style: {
            colors: [mainChartColors.labelColor],
            fontSize: '14px',
            fontWeight: 500,
          },
        },
        axisBorder: {
          color: mainChartColors.borderColor,
        },
        axisTicks: {
          color: mainChartColors.borderColor,
        },
        crosshairs: {
          show: true,
          position: 'back',
          stroke: {
            color: mainChartColors.borderColor,
            width: 1,
            dashArray: 10,
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: [mainChartColors.labelColor],
            fontSize: '14px',
            fontWeight: 500,
          },
          formatter: function (value: number) {
            return '$' + value;
          },
        },
      },
      legend: {
        fontSize: '14px',
        fontWeight: 500,
        fontFamily: 'Inter, sans-serif',
        labels: {
          colors: [mainChartColors.labelColor],
        },
        itemMargin: {
          horizontal: 10,
        },
      },
      responsive: [
        {
          breakpoint: 1024,
          options: {
            xaxis: {
              labels: {
                show: false,
              },
            },
          },
        },
      ],
    };
  }


  getNewProductsChartOptions(): ApexCharts.ApexOptions {
    const options = {
      colors: ['#1A56DB', '#FDBA8C'],
      series: [
        {
          name: 'Quantity',
          color: '#1A56DB',
          data: [
            { x: '01 Feb', y: 170 },
            { x: '02 Feb', y: 180 },
            { x: '03 Feb', y: 164 },
            { x: '04 Feb', y: 145 },
            { x: '05 Feb', y: 194 },
            { x: '06 Feb', y: 170 },
            { x: '07 Feb', y: 155 },
          ],
        },
      ],
      chart: {
        type: 'bar' as 'bar',
        height: '140px',
        fontFamily: 'Inter, sans-serif',
        foreColor: '#4B5563',
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: '90%',
          borderRadius: 3,
        },
      },
      tooltip: {
        shared: false,
        intersect: false,
        style: {
          fontSize: '14px',
          fontFamily: 'Inter, sans-serif',
        },
      },
      states: {
        hover: {
          filter: {
            type: 'darken',
            value: 1,
          },
        },
      },
      stroke: {
        show: true,
        width: 5,
        colors: ['transparent'],
      },
      grid: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        floating: false,
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: false,
      },
      fill: {
        opacity: 1,
      },
    };
  
    return options;
  }
  

  getSalesByCategoryOptions(): ApexCharts.ApexOptions {
    const options = {
      colors: ['#1A56DB', '#FDBA8C', '#17B0BD'],
      series: [
        {
          name: 'Desktop PC',
          color: '#1A56DB',
          data: [
            { x: '01 Feb', y: 170 },
            { x: '02 Feb', y: 180 },
            { x: '03 Feb', y: 164 },
            { x: '04 Feb', y: 145 },
            { x: '05 Feb', y: 194 },
            { x: '06 Feb', y: 170 },
            { x: '07 Feb', y: 155 },
          ],
        },
        {
          name: 'Phones',
          color: '#FDBA8C',
          data: [
            { x: '01 Feb', y: 120 },
            { x: '02 Feb', y: 294 },
            { x: '03 Feb', y: 167 },
            { x: '04 Feb', y: 179 },
            { x: '05 Feb', y: 245 },
            { x: '06 Feb', y: 182 },
            { x: '07 Feb', y: 143 },
          ],
        },
        {
          name: 'Gaming/Console',
          color: '#17B0BD',
          data: [
            { x: '01 Feb', y: 220 },
            { x: '02 Feb', y: 194 },
            { x: '03 Feb', y: 217 },
            { x: '04 Feb', y: 279 },
            { x: '05 Feb', y: 215 },
            { x: '06 Feb', y: 263 },
            { x: '07 Feb', y: 183 },
          ],
        },
      ],
      chart: {
        type: 'line' as 'line',
        height: '420px',
        fontFamily: 'Inter, sans-serif',
        foreColor: '#4B5563',
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: '90%',
          borderRadius: 3,
        },
      },
      tooltip: {
        shared: true,
        intersect: false,
        style: {
          fontSize: '14px',
          fontFamily: 'Inter, sans-serif',
        },
      },
      states: {
        hover: {
          filter: {
            type: 'darken',
            value: 1,
          },
        },
      },
      stroke: {
        show: true,
        width: 5,
        colors: ['transparent'],
      },
      grid: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        floating: false,
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: false,
      },
      fill: {
        opacity: 1,
      },
    };
  
    return options;
  }
  

  getVisitorsChartOptions(): ApexCharts.ApexOptions {
  const visitorsChartColors = document.documentElement.classList.contains('dark')
    ? {
        fillGradientShade: 'dark',
        fillGradientShadeIntensity: 0.45,
      }
    : {
        fillGradientShade: 'light',
        fillGradientShadeIntensity: 1,
      };

  const options = {
    series: [
      {
        name: 'Visitors',
        data: [500, 590, 600, 520, 610, 550, 600],
      },
    ],
    labels: ['01 Feb', '02 Feb', '03 Feb', '04 Feb', '05 Feb', '06 Feb', '07 Feb'],
    chart: {
      type: 'area' as 'area',
      height: '305px',
      fontFamily: 'Inter, sans-serif',
      sparkline: {
        enabled: true,
      },
      toolbar: {
        show: false,
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: visitorsChartColors.fillGradientShade,
        shadeIntensity: visitorsChartColors.fillGradientShadeIntensity,
      },
    },
    plotOptions: {
      area: {
        fillTo: 'end' as 'end', // Establece fillTo como "end"
      },
    },
    theme: {
      monochrome: {
        enabled: true,
        color: '#1A56DB',
      },
    },
    tooltip: {
      style: {
        fontSize: '14px',
        fontFamily: 'Inter, sans-serif',
      },
    },
  };

  return options;

}
  
  

  getSignupsChartOptions(): ApexCharts.ApexOptions {
    const signupsChartColors = document.documentElement.classList.contains('dark')
      ? {
          backgroundBarColors: ['#374151', '#374151', '#374151', '#374151', '#374151', '#374151', '#374151'],
        }
      : {
          backgroundBarColors: ['#E5E7EB', '#E5E7EB', '#E5E7EB', '#E5E7EB', '#E5E7EB', '#E5E7EB', '#E5E7EB'],
        };
  
    const options = {
      series: [
        {
          name: 'Users',
          data: [1334, 2435, 1753, 1328, 1155, 1632, 1336],
        },
      ],
      labels: ['01 Feb', '02 Feb', '03 Feb', '04 Feb', '05 Feb', '06 Feb', '07 Feb'],
      chart: {
        type: 'bar' as 'bar',
        height: '140px',
        foreColor: '#4B5563',
        fontFamily: 'Inter, sans-serif',
        toolbar: {
          show: false,
        },
      },
      theme: {
        monochrome: {
          enabled: true,
          color: '#1A56DB',
        },
      },
      plotOptions: {
        bar: {
          columnWidth: '25%',
          borderRadius: 3,
          colors: {
            backgroundBarColors: signupsChartColors.backgroundBarColors,
            backgroundBarRadius: 3,
          },
        },
        dataLabels: {
          hideOverflowingLabels: false,
        },
      },
      xaxis: {
        floating: false,
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      tooltip: {
        shared: true,
        intersect: false,
        style: {
          fontSize: '14px',
          fontFamily: 'Inter, sans-serif',
        },
      },
      states: {
        hover: {
          filter: {
            type: 'darken',
            value: 0.8,
          },
        },
      },
      fill: {
        opacity: 1,
      },
      yaxis: {
        show: false,
      },
      grid: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
    };
  
    return options;
  }
  

  // Añade cualquier otra función necesaria...

}