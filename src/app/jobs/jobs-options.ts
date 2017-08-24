export class JobOptions {
  periodOptions = [
    { value: 'last_day', name: 'Last Day' },
    { value: 'last_7_days', name: 'Last 7 Days' },
    { value: 'last_30_days', name: 'Last 30 Days' }
  ];

  classOptions = [
    { value: 'project_name' , name: 'Project' },
    { value: 'research_area', name: 'Research Area' },
    { value: 'institution', name: 'Institution' },
    { value: 'application_name', name: 'Application Name' },
    { value: 'language', name: 'Language' },
    { value: 'model', name: 'Model' },
    { value: 'licence', name: 'Licence' }
  ];

  axisOptions = [
    { value: 'nodes' , name: 'Nodes [pc.]' },
    { value: 'memory' , name: 'Memory [MB]' },
    { value: 'energy' , name: 'Energy [Wh]' },
    { value: 'runtime' , name: 'Runtime [s]' },
    { value: 'queue_time' , name: 'Queue time [s]' }
  ];
};
