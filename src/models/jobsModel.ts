import { Job, jobData } from "src/models/jobData";

class JobsModel {
  listedYears: Array<number>;

  constructor(private jobsData: Job[]) {
    this.listedYears = this.getListedYears();
  }

  get years() {
    return this.listedYears;
  }

  /**
   * parse this.jobsData & return unique years array sorted desc
   */
  private getListedYears() {
    // get years & find max year
    const uniqueYears: number[] = [];
    this.jobsData.forEach((job: Job) => {
      if (uniqueYears.indexOf(job.year) >= 0) return;
      uniqueYears.push(job.year);
    });

    // sort years
    const sortedYears: number[] = uniqueYears.sort((a: number, b: number) => {
      const res: number = b - a;
      return res;
    });

    return sortedYears;
  }

  getJobsWithinYear(year: number) {
    const jobs = this.jobsData.filter(job => job.year === year);
    return jobs;
  }
}

export const jobsModel = new JobsModel(jobData);
