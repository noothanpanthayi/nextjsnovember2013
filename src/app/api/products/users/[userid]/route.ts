import { NextResponse } from 'next/server';
import data from '../../../../data/data.json';

export async function GET(request:Request, context:any){
    const {params}=context;

    const user=data.filter((item:{name:string, age:number, id:number})=>{
        return params.userid===item.id.toString()
    });

    return NextResponse.json({
        user
      })
}