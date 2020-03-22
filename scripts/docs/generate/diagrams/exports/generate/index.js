import { print } from './helpers';

export default settings => {
  const { imported, exported } = print(settings);

  return `
    @startuml
      package "Imported" #ddd {
        ${imported}
      }

      package "Exported" #ddd {
        ${exported}
      }

    @enduml
  `;
};