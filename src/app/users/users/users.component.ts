import { Component, OnInit } from '@angular/core';
import { Rol } from '../models/Rol';
import { User } from '../models/User';
import { RolesService } from '../services/roles.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  viewList: boolean = true;
  users: User[] = [];
  // Usuarios uxiliares para la busqueda
  usersAux: User[] = [];
  roles: Rol[] = [];

  filter: string = '';

  constructor(
    private usersServicio: UsersService,
    private rolesServicio: RolesService
  ) {}

  ngOnInit(): void {
    this.getRoles();
  }

  deleteUser(user: User): void {
    let indice: number = this.users.indexOf(user);
    this.users.splice(indice, 1);
    this.usersAux = this.users.slice();
  }

  filterUsers(): void {
    this.filter = this.filter.trim();
    this.users = this.usersAux.filter((user: User) => {
      return (
        user.name.toLowerCase().includes(this.filter.toLowerCase()) ||
        user.email.toLowerCase().includes(this.filter.toLowerCase())
      );
    });
  }

  getUsers(): void {
    this.usersServicio.getUsers().subscribe(
      (response) => {
        this.users = response.users.map((user: User) => {
          let rolUser: Rol | any = this.roles.find((rol: Rol) => {
            return user.roleId == rol.id;
          });
          user.role = rolUser;
          return user;
        });
        this.usersAux = this.users.slice();
      },
      (error) => {
        // Normalmente el endpoint regresa un error, aunque en este caso esta de mas
        console.log(error.error);
      }
    );
  }

  getRoles(): void {
    this.rolesServicio.getRoles().subscribe(
      (response) => {
        this.roles = response.roles;
        this.getUsers();
      },
      (error) => {
        // Normalmente el endpoint regresa un error, aunque en este caso esta de mas
        console.log(error.error);
      }
    );
  }
}
