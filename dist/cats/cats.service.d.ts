import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './entities/cat.entity';
export declare class CatsService {
    private readonly cats;
    create(cat: CreateCatDto): Cat;
    findOne(id: number): Cat;
}
