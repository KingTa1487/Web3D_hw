#include <stdio.h>
#include <stdlib.h>


int main(int argc, char *argv[]) {
  
	int num, i=0;
	for(;;){
		if(argv[i] == NULL){
			printf ("%d", atoi(argv[i+1]) );
			break;
		}
		i++;
	}
	
	
	exit(2);
    
}
