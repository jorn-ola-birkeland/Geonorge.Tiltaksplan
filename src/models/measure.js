export class Measure {
   constructor({ id, name, progress, volume, status, trafficLight, comment, results } = {}) {
      this.id = id || 0;
      this.name = name || '';
      this.progress = progress || '';
      this.volume = volume || 0;
      this.status = status || 1;
      this.trafficLight = trafficLight || 1;
      this.comment = comment || '';
      this.results = results || '';
      this.culture = 'nb-NO';
   }
}