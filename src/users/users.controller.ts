import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import express from 'express';
import { Req } from '@nestjs/common';
import * as CreateUserDtos from './dtos/CreateUser.dtos';
@Controller('users')
export class UsersController {
  @Get('getAll')
  getUsers() {
    return [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
    ];
  }
  // Example of handling a POST request with request and response objects
  @Post('create')
  createUser(
    @Req() request: express.Request,
    @Res() response: express.Response,
  ) {
    console.log('Request Body:', request.body);
    response.status(201).send({ message: 'User created successfully' });
  }

  // Example of using DTO for request body validation
  @Post('create_2')
  createUser_2(@Body() userData: CreateUserDtos.CreateUserDto) {
    console.log('User Data:', userData);
    return { message: 'User created successfully', user: userData };
  }
}
