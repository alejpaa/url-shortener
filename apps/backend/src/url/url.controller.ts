import { Controller, Get } from '@nestjs/common';

@Controller()
export class UrlController {
    
    @Get('/health')
    getHealth(){
        return "ok"
    }
    

}
