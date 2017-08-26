export class JobOptions {
  periodOptions = [
    { value: 'last_day', name: 'Last Day' },
    { value: 'last_7_days', name: 'Last 7 Days' },
    { value: 'last_30_days', name: 'Last 30 Days' }
  ];

  propertyOptions = [
    { value: 'project_name' , name: 'Project' },
    { value: 'research_area', name: 'Research Area' },
    { value: 'institution', name: 'Institution' },
    { value: 'application_name', name: 'Application Name' },
    { value: 'language', name: 'Language' },
    { value: 'model', name: 'Model' },
    { value: 'licence', name: 'Licence' }
  ];

  axisOptions = [
    { value: 'jobs', name: 'Jobs [pc.]'},
    { value: 'nodes' , name: 'Nodes [pc.]' },
    { value: 'memory' , name: 'Memory [GB]' },
    { value: 'power' , name: 'Power [W]' },
    { value: 'runtime' , name: 'Runtime [h]' },
    { value: 'queue_time' , name: 'Queue time [h]' }
  ];
};
