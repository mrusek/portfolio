const getSoftSkills= async function () {
    return [ {
        name: "Prawo jazdy kat. B",
        acquisitionDate: "11.2011",
        certification: "Starostwo powiatowe w pabianicach",
      },
      {
        name: "Język angielski poziom C1",
        acquisitionDate: "01.2016",
        certification: "Politechnika Łódzka",
      },
      {
        name: "Praca w zwinnych metodykach tworzenia oprogramowania",
        acquisitionDate: null,
        certification: null,
      }];
};
const getTechnicalSkills = async function () {
    return [
        {
            name: ".NET",
            values: 
              [
                {
                  label: "ASP.NET",
                  stars: 3
                },
                {
                  label: ".NET Framework",
                  stars: 3
                },
                {
                  label: "SSRS",
                  stars: 2
                },
                {
                  label: ".NET core/.NET 5",
                  stars: 2
                },
              ]
          },
          {
            name: "Javascript",
            values: 
            [
              {
                label: "Knockout.JS",
                stars: 3
              },
              {
                label: "Vue.JS",
                stars: 2
              },
              {
                label: "Angular.JS",
                stars: 2
              },
              {
                label: "React",
                stars: 1
              }
            ]
          },
          {
            name: "SQL",
            values: 
            [
              {
              label:"SQL Server",
              stars: 3
              }
            ]
          },
          {
            name: "Business Process Management",
            values: 
            [
              {
                label: "K2 Five (blackpearl)",
                stars: 3
              }
            ]
          },
          {
            name: "Sharepoint",
            values: 
            [
              {
                label: "Sharepoint 2013/2016/2019 on premises",
                stars: 2
              }
            ]
          },
          {
            name: "Other",
            values: []
          }
    ];
};

export {getSoftSkills, getTechnicalSkills};