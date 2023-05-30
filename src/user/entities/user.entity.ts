import { ApiProperty } from "@nestjs/swagger"

export class UserModel { // model tren swagger

    @ApiProperty()
    user_id: number

    @ApiProperty()
    full_name: string

    @ApiProperty()
    email: string

    @ApiProperty()
    pass_word: string
}
