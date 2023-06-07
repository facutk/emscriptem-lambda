#include <stdio.h>

#include <emscripten.h>

extern "C"
{
  EMSCRIPTEN_KEEPALIVE
  int add(int a, int b)
  {
    return a + b;
  }
}

extern "C"
{
  EMSCRIPTEN_KEEPALIVE
  float find_minimum(float *numbers, int length)
  {
    if (length <= 0)
    {
      return 0.0; // or handle the error case appropriately
    }

    float min = numbers[0];
    for (int i = 1; i < length; i++)
    {
      if (numbers[i] < min)
      {
        min = numbers[i];
      }
    }

    return min;
  }
}

extern "C"
{
  EMSCRIPTEN_KEEPALIVE
  float identity(float input)
  {
    return input;
  }
}

extern "C"
{
  EMSCRIPTEN_KEEPALIVE
  long file_access(char *file_contents, int BPS)
  {
    FILE *fp;

    fp = fopen("/file.txt", "w+");
    fprintf(fp, "%s %s %s %d", "We", "are", "in", 2012);
    // fputs(file_contents, fp);

    fclose(fp);

    fp = fopen("/file.txt", "r");
    fseek(fp, 0L, SEEK_END);
    long sz = ftell(fp);

    return sz;
  }
}

extern "C"
{
  EMSCRIPTEN_KEEPALIVE
  int process_string(char *null_terminated_string)
  {
    int length = 0;
    while (null_terminated_string[length] != '\0')
    {
      length++;
    }

    return length; // Return the length of the processed string
  }
}