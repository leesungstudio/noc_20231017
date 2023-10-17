class Walker {
    constructor(i) {
        
        this.c = map(noise(i), 0, 1, 180, 330);


        this.x = 100;
        this.y = 100;
       
        this.position = createVector(-mouseX , -mouseY, -700);

        
        this.velocity = createVector(5.5,1, 1);
        this.acceleration = createVector(0, 0, 0);

    }
    reactMusic(level){
        this.size = map(level, 0, 1, 0, 40);
        
        
    }


    update() {
        if(mouseX>width/2){
            this.acceleration.x += 1;
        }
        if(mouseX<width/2){
            this.acceleration.x -= 1;
        }
        this.t += 1;
        this.acceleration.y += (sin(this.t + this.size)  );
        this.acceleration.z += (cos(this.t + this.size)  );
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
       
    }

   

    bounceEdges() {
        if (this.position.x > 1000 ) {
            this.position.x = 1000;
            this.velocity.x = this.velocity.x * -1;
            
        }
        if (this.position.x < -1000) {
            this.position.x = -1000;
            this.velocity.x = this.velocity.x * -1;
        }
        if (this.position.y > 1000 ) {
            this.velocity.y = this.velocity.y * -1;
        }
        if (this.position.y < -1000) {
            this.position.y = -1000;
        }
        if (this.position.z > 1000 || this.position.z < -1000) {
            this.velocity.z = this.velocity.z * -1;
        }

    }

    display() {
        noStroke();
        colorMode(HSB);
        stroke(this.c - this.size*10, 100, 100);
       

        strokeWeight(this.size);
        //strokeWeight(10);
        noFill();

        push();
        strokeCap(SQUARE);
        
        translate(this.position.x, this.position.y, this.position.z);
        sphere(120, 1, 1);
        pop();

    }
}
