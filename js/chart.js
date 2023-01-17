


const ctx = document.getElementById('totalGasto');

new Chart(ctx, {
  type: 'line',
  data: {
    
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [{
      label: 'Gastos 2023',
      
      data: [5000.00, 3500.00, 4352.21, 4900.50 , 2678.56, 3564.89],
      borderWidth: 3,
      tension: 0.4
    }]
  },
  options: {
    
    plugins: {
        legend: {
          display: false
        },
      },
    scales: {
        x:{
            grid: {
                display: false
              }
        },
        
        y: {
          beginAtZero: true,
          grid: {
            display: true
          }
          
        }
    }
  }
});


const pizza = document.getElementById('pizza');

new Chart(pizza, {
    type: 'doughnut',
    data: {
      labels: ['Itau card', 'Nu' ,'Bradesco'],
      datasets: [{
        label: 'Gastos 2023',
        data: [2000.00, 450.00 , 750],
        borderWidth: 5,
        tension: 0.4
      }]
    },
    options: {
      scales: {
        x:{
            grid: {
                display: false
              }
        },
        
        y: {
          beginAtZero: true,
          grid: {
            display: false
          }
          
        }
      }
    }
  });
  


  const bar = document.getElementById('bar');

new Chart(bar, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
      datasets: [{
        label: 'Gastos 2023',
        data: [5000.00, 3500.00, 4352.21, 4900.50 , 2678.56, 3564.89],
        borderWidth: 5,
        tension: 0.4
      }]
    },
    options: {
        plugins: {
            legend: {
              display: false
            },
          },
      scales: {
        x:{
            grid: {
                display: false
              }
        },
        
        y: {
          beginAtZero: true,
          grid: {
            display: false
          }
          
        }
      }
    }
  });
  