import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'dot-chart',
  standalone: true,
  templateUrl: './dot-chart.component.html',
  styleUrls: ['./dot-chart.component.scss'],
})
export class UiChartComponent {
  readonly title = input('');
  readonly description = input('');
  readonly summary = input('');
  readonly values = input<number[]>([12, 24, 20, 36, 28, 44]);

  readonly normalized = computed(() => {
    const values = this.values();
    const max = Math.max(...values, 1);
    const min = Math.min(...values, 0);
    return values.map((value) => (value - min) / Math.max(max - min, 1));
  });

  readonly points = computed(() => {
    const normalized = this.normalized();
    const width = 280;
    const height = 100;
    const padding = 20;
    const step = normalized.length > 1 ? width / (normalized.length - 1) : 0;

    return normalized.map((value, index) => ({
      index,
      x: padding + index * step,
      y: padding + (1 - value) * height,
    }));
  });

  readonly linePath = computed(() => {
    const points = this.points();
    if (points.length === 0) return '';
    return points.map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`).join(' ');
  });

  readonly areaPath = computed(() => {
    const points = this.points();
    if (points.length === 0) return '';
    const baseY = 140;
    const start = `M ${points[0].x} ${baseY}`;
    const line = points.map((point, index) => `${index === 0 ? 'L' : 'L'} ${point.x} ${point.y}`).join(' ');
    const end = `L ${points[points.length - 1].x} ${baseY} Z`;
    return [start, line, end].join(' ');
  });
}



