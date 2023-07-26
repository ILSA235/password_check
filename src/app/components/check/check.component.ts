import {Component} from '@angular/core'


@Component({
    selector: 'app-check',
    templateUrl: './check.component.html',
    styleUrls: ['./check.component.css']
})
export class CheckComponent{
    inputData: string = '';
    isEasy = false;
    isMedium = false;
    isStrong = false;
    isSmall = false;
    checkPassword(){
        let pswd = this.inputData;
        const word = new RegExp('^[A-Za-z]+$','gm');
        const number = new RegExp('^[0-9]+$','gm');
        const symbol = new RegExp('^[^A-Za-z0-9_]+$','gm');
        const wordnum = new RegExp('^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9]+$','gm');
        const wordsymb = new RegExp('^(?=.*[^a-zA-Z0-9_])(?=.*[A-Za-z])[^0-9_]+$','gm');
        const numsymb = new RegExp('^(?=.*[^a-zA-Z0-9_])(?=.*[0-9])[^a-zA-Z_]+$','gm');
        const wordnumsymb = new RegExp('^(?=.*[^a-zA-Z0-9_])(?=.*[A-Za-z])(?=.*[0-9])[^_]+$','gm');
        const easyw = word.exec(pswd);
        const easyn = number.exec(pswd);
        const easys = symbol.exec(pswd);
        const medwn = wordnum.exec(pswd);
        const medws = wordsymb.exec(pswd);
        const medns = numsymb.exec(pswd);
        const strong = wordnumsymb.exec(pswd);
        if(this.inputData.length < 8 && this.inputData.length > 0){
            this.isSmall = true;
            this.isMedium = false;
            this.isStrong = false;
        }
        else if(this.inputData.length == 0){
            this.isSmall = false;
            this.isMedium = false;
            this.isStrong = false;
            this.isEasy = false;
        }
        else{
            if(easyw || easyn || easys){
                console.log(1);
                this.isEasy = true;
                this.isSmall = false;
                this.isMedium = false; 
                this.isStrong = false;
            }
            else if(medwn || medws || medns){
                this.isMedium = true;
                this.isSmall = false;
                this.isStrong = false;
            }
            else if(strong){
                this.isStrong = true;
            }
        }
    }
}