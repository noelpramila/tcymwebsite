import { Input, Pipe, PipeTransform } from '@angular/core';
import { ServiceInfo } from '../ServiceInfo';

@Pipe({
  name: 'servicesFilter'
})
export class ServicesFilterPipe implements PipeTransform {

  transform(services: ServiceInfo[], searchText: string): ServiceInfo[] {
    if (!services) {
      return [];
    }

    if (!searchText)  {
      return services;
    }

    return services.filter(service => {
      return isTitleMatch(service.title, searchText) || isKeywordMatch(service.keywords, searchText);
    });
  }

}

function isTitleMatch(title: string, searchText: string): boolean {
  return title.includes(searchText);
}

function isKeywordMatch(keywords: string[], searchText: string): boolean {
  return keywords.includes(searchText);
}

