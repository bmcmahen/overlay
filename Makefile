
scripts:
	@duo index.js > dist/overlay.js -g Overlay

styles:
	@duo index.css > dist/overlay.css

dev:
	@duo index.js > dist/overlay.js -w

clean:
	rm -fr dist components

.PHONY: clean
