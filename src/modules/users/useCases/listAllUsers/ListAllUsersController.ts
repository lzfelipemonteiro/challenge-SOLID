import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;

    try {
      const user = this.listAllUsersUseCase.execute({ user_id });
      return response.json(user);
    } catch (message) {
      return response.status(400).send({ error: message });
    }
  }
}

export { ListAllUsersController };
