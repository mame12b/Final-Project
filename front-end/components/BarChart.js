import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

Chart.helpers.drawRoundedTopRectangle = function(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height);
  ctx.lineTo(x, y + height);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
};

Chart.elements.RoundedTopRectangle = Chart.elements.Rectangle.extend({
  draw: function() {
    var ctx = this._chart.ctx;
    var vm = this._view;
    var left, right, top, bottom, signX, signY, radius;
    var borderWidth = vm.borderWidth;

    if (!vm.horizontal) {
      left = vm.x - vm.width / 2;
      right = vm.x + vm.width / 2;
      top = vm.y;
      bottom = vm.base;
      signX = 1;
      signY = bottom > top ? 1 : -1;
      radius = this._chart.config.options.barRadius;
    } else {
      left = vm.base;
      right = vm.x;
      top = vm.y - vm.height / 2;
      bottom = vm.y + vm.height / 2;
      signX = right > left ? 1 : -1;
      signY = 1;
      radius = this._chart.config.options.horizontalBarRadius;
    }

    if (borderWidth) {
      var barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
      borderWidth = borderWidth > barSize ? barSize : borderWidth;
      var halfStroke = borderWidth / 2;
      var borderLeft = left + (left > right ? 0 : -halfStroke + (radius + halfStroke) * signX);
      var borderRight = right + (left > right ? halfStroke + (radius + halfStroke) * signX : 0);
      var borderTop = top + (top > bottom ? 0 : -halfStroke + (radius + halfStroke) * signY);
      var borderBottom = bottom + (top > bottom ? halfStroke + (radius + halfStroke) * signY : 0);
      if (borderLeft !== borderRight) {
        top = borderTop;
        bottom = borderBottom;
      }
      left = borderLeft;
      right = borderRight;
    }

    var barWidth = Math.abs(left - right);
    var roundness = radius / barWidth;
    var radiusRatio = 1 - roundness;
    var barRadius = barWidth * roundness * radiusRatio;
    var cornerRadius = radius - barRadius;

    if (vm.backgroundColor) {
      ctx.fillStyle = vm.backgroundColor;
    }
    if (vm.borderColor) {
      ctx.strokeStyle = vm.borderColor;
      ctx.lineWidth = borderWidth;
    }

    var x1, y1, x2, y2, x3, y3, x4, y4;
    if (vm.horizontal) {
      x1 = left + cornerRadius;
      x2 = left + barRadius;
      x3 = right - barRadius;
      x4 = right - cornerRadius;

      y1 = top;
      y2 = top;
      y3 = bottom;
      y4 = bottom;

      ctx.beginPath();
      ctx.fillStyle = vm.backgroundColor;
      ctx.strokeStyle = vm.borderColor;
      ctx.lineWidth = borderWidth;

      ctx.moveTo(x2, y2);
      ctx.lineTo(x3, y3);
      ctx.quadraticCurveTo(right, bottom, x4, y4 + cornerRadius);
      ctx.lineTo(x4, y4 - cornerRadius);
      ctx.quadraticCurveTo(right, top, x3, y3);
      ctx.lineTo(x2, y2);
      ctx.quadraticCurveTo(left, top, x1, y1 - cornerRadius);
      ctx.lineTo(x1, y1 + cornerRadius);
      ctx.quadraticCurveTo(left, bottom, x2, y2);
      ctx.closePath();
      ctx.fill();
      if (borderWidth) {
        ctx.stroke();
      }
    } else {
      x1 = left;
      x2 = left;
      x3 = right;
      x4 = right;

      y1 = top + cornerRadius;
      y2 = top + barRadius;
      y3 = bottom - barRadius;
      y4 = bottom - cornerRadius;

      ctx.beginPath();
      ctx.fillStyle = vm.backgroundColor;
      ctx.strokeStyle = vm.borderColor;
      ctx.lineWidth = borderWidth;

      ctx.moveTo(x2, y2);
      ctx.quadraticCurveTo(left, top, x1 + cornerRadius, y1);
      ctx.lineTo(x1 + barRadius, y2);
      ctx.quadraticCurveTo(left, top, x1, y1 - cornerRadius);
      ctx.lineTo(x4, y4 + cornerRadius);
      ctx.quadraticCurveTo(right, bottom, x3 - barRadius, y3);
      ctx.lineTo(x3 - cornerRadius, y4);
      ctx.quadraticCurveTo(right, bottom, x4, y4 - cornerRadius);
      ctx.lineTo(x1, y1 + cornerRadius);
      ctx.closePath();
      ctx.fill();
      if (borderWidth) {
        ctx.stroke();
      }
    }
  },
});

Chart.defaults.roundedBar = Chart.defaults.bar;
Chart.controllers.roundedBar = Chart.controllers.bar.extend({
  dataElementType: Chart.elements.RoundedTopRectangle,
});

Chart.defaults.roundedHorizontalBar = Chart.defaults.horizontalBar;
Chart.controllers.roundedHorizontalBar = Chart.controllers.horizontalBar.extend({
  dataElementType: Chart.elements.RoundedTopRectangle,
});

const BarChart = ({ tasks }) => {
  const pieData = {
    labels: tasks.map((task) => task.name),
    datasets: [
      {
        data: tasks.map((task) => task.completion),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      },
    ],
  };

  const barData = {
    labels: tasks.map((task) => task.name),
    datasets: [
      {
        label: 'Completion',
        data: tasks.map((task) => task.completion),
        backgroundColor: '#4BC0C0',
        type: 'roundedBar',
        barRadius: 10,
      },
    ],
  };

  return (
    <div className="container">
      <div className="chart-container">
        <h2 className="text-2xl font-bold mb-4">Task Completion by Percentage (Pie Chart)</h2>
        <Pie data={pieData} />
      </div>
      <div className="chart-container">
        <h2 className="text-2xl font-bold mb-4">Task Completion by Percentage (Bar Chart)</h2>
        <Bar data={barData} />
      </div>
    </div>
  );
};

export default BarChart;