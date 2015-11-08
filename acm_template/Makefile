TEX = pdflatex --shell-escape
BIB = bibtex 
PAPER = abstract

%.pdf: %.tex $(DEPS)
	$(TEX) -c -o $@ $< $(CFLAGS)

all: paper

paper:
	$(TEX) $(PAPER)
	$(BIB) $(PAPER)
	$(TEX) $(PAPER)
	$(TEX) $(PAPER)
	$(TEX) $(PAPER)

clean:
	rm -f *.aux *.bbl *.blg *.log *.pdf
