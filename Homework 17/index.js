"use strict";

class Student {
  constructor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = [];
    this.attendance = new Array(25).fill(null);
  }

  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  }

  addGrade(grade) {
    this.grades.push(grade);
  }

  getAverageGrade() {
    if (this.grades.length === 0) {
      return 0;
    }

    const sum = this.grades.reduce(
      (accumulator, currentGrade) => accumulator + currentGrade,
      0
    );

    const average = sum / this.grades.length;

    return average;
  }

  estimate(grade) {
    if (grade >= 0 && grade <= 100) {
      this.grades.push(grade);
      console.log(
        `${this.firstName} ${this.lastName} отримав оцінку: ${grade}`
      );
    } else {
      console.log("Оцінка повинна бути в межах від 0 до 100.");
    }
  }
  present() {
    this.updateAttendance(true);
  }

  absent() {
    this.updateAttendance(false);
  }

  updateAttendance(isPresent) {
    const index = this.attendance.findIndex((value) => value === null);
    if (index !== -1) {
      this.attendance[index] = isPresent;
      console.log(
        `${this.firstName} ${this.lastName} був ${
          isPresent ? "присутній" : "відсутній"
        }.`
      );
    } else {
      console.log("Масив відвідуваності вже заповнений.");
    }
  }

  summary() {
    const averageGrade = this.getAverageGrade();
    const attendanceRate =
      this.attendance.filter((value) => value === true).length /
      this.attendance.length;

    if (averageGrade >= 90 || attendanceRate >= 0.9) {
      return "Молодець!";
    } else if (averageGrade >= 70 || attendanceRate >= 0.7) {
      return "Добре, але можна краще!";
    } else {
      return "Редиска!";
    }
  }
}

const student1 = new Student("Марина", "Маринівна", 1995);
student1.estimate(100);
student1.estimate(100);
student1.estimate(95);
student1.present();
student1.present();
student1.absent();
const age1 = student1.getAge();
console.log(`Вік студента: ${age1}`);
const averageGrade1 = student1.getAverageGrade();
console.log(`Середня оцінка студента: ${averageGrade1}`);
console.log(student1.summary());

const student2 = new Student("Тарас", "Тарасенко", 1998);
student2.estimate(85);
student2.estimate(85);
student2.estimate(80);
student2.present();
student2.present();
student2.absent();
const age2 = student2.getAge();
console.log(`Вік студента: ${age2}`);
const averageGrade2 = student2.getAverageGrade();
console.log(`Середня оцінка студента: ${averageGrade2}`);
console.log(student2.summary());

const student3 = new Student("Дмитро", "Дмитренко", 2001);
student3.estimate(60);
student3.estimate(65);
student3.estimate(70);
student3.present();
student3.absent();
student3.absent();
const age3 = student3.getAge();
console.log(`Вік студента: ${age3}`);
const averageGrade3 = student3.getAverageGrade();
console.log(`Середня оцінка студента: ${averageGrade3}`);
console.log(student3.summary());
